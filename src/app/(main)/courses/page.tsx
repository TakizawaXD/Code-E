
"use client";

import { useMemo, Suspense, useState, useEffect } from "react";
import { CourseCard } from "@/components/course-card";
import { allSchools } from "@/lib/data";
import type { Course, LearningPath, School } from "@/lib/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function FilterSidebar({
    schools,
    levels,
    selectedSchools,
    onSchoolChange,
    selectedLevels,
    onLevelChange,
    searchQuery,
    onSearchChange,
}: {
    schools: School[];
    levels: string[];
    selectedSchools: string[];
    onSchoolChange: (schoolId: string, checked: boolean) => void;
    selectedLevels: string[];
    onLevelChange: (level: string, checked: boolean) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}) {
    return (
        <div className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Buscar cursos..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <Accordion type="multiple" defaultValue={["schools", "levels"]} className="w-full">
                <AccordionItem value="schools">
                    <AccordionTrigger className="text-lg font-semibold">Categorías</AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="space-y-3">
                            {schools.map((school) => (
                                <div key={school.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`school-${school.id}`}
                                        checked={selectedSchools.includes(school.id)}
                                        onCheckedChange={(checked) => onSchoolChange(school.id, !!checked)}
                                    />
                                    <label
                                        htmlFor={`school-${school.id}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {school.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="levels">
                    <AccordionTrigger className="text-lg font-semibold">Niveles</AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="space-y-3">
                            {levels.map((level) => (
                                <div key={level} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`level-${level}`}
                                        checked={selectedLevels.includes(level)}
                                        onCheckedChange={(checked) => onLevelChange(level, !!checked)}
                                    />
                                    <label
                                        htmlFor={`level-${level}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                                    >
                                        {level}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

function CoursesContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || "");
    const [selectedSchools, setSelectedSchools] = useState<string[]>(searchParams.getAll('school') || []);
    const [selectedLevels, setSelectedLevels] = useState<string[]>(searchParams.getAll('level') || []);

    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQuery) params.set('q', searchQuery);
        selectedSchools.forEach(school => params.append('school', school));
        selectedLevels.forEach(level => params.append('level', level));

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [searchQuery, selectedSchools, selectedLevels, router, pathname]);

    const allCourses = useMemo(() => allSchools.flatMap(school =>
        school.learningPaths.flatMap(path =>
            path.courses.map(course => ({ ...course, schoolId: school.id }))
        )
    ), []);

    const allLearningPaths = useMemo(() => allSchools.flatMap(school => school.learningPaths), []);
    const uniqueLevels = useMemo(() => [...new Set(allCourses.map(c => c.level || 'básico'))], [allCourses]);

    const filteredCourses = useMemo(() => {
        return allCourses.filter(course => {
            const schoolMatch = selectedSchools.length === 0 || selectedSchools.includes(course.schoolId);
            const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(course.level || 'básico');
            const searchMatch = !searchQuery ||
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (Array.isArray(course.instructor)
                    ? course.instructor.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
                    : course.instructor.toLowerCase().includes(searchQuery.toLowerCase()));

            return schoolMatch && levelMatch && searchMatch;
        });
    }, [allCourses, searchQuery, selectedSchools, selectedLevels]);

    const coursesByPath = useMemo(() => {
        const pathsMap: { [key: string]: LearningPath & { courses: Course[] } } = {};
        
        filteredCourses.forEach(course => {
            const path = allLearningPaths.find(p => p.courses.some(pc => pc.id === course.id));
            if (path) {
                if (!pathsMap[path.id]) {
                    pathsMap[path.id] = { ...path, courses: [] };
                }
                pathsMap[path.id].courses.push(course);
            }
        });

        return Object.values(pathsMap).filter(path => path.courses.length > 0);
    }, [filteredCourses, allLearningPaths]);

    const handleSchoolChange = (schoolId: string, checked: boolean) => {
        setSelectedSchools(prev =>
            checked ? [...prev, schoolId] : prev.filter(id => id !== schoolId)
        );
    };

    const handleLevelChange = (level: string, checked: boolean) => {
        setSelectedLevels(prev =>
            checked ? [...prev, level] : prev.filter(l => l !== level)
        );
    };

    const pageTitle = "Catálogo de Cursos";
    const pageDescription = "Explora nuestra completa colección de cursos. Usa los filtros para encontrar exactamente lo que necesitas.";

    const filterSidebarProps = {
        schools: allSchools,
        levels: uniqueLevels,
        selectedSchools,
        onSchoolChange: handleSchoolChange,
        selectedLevels,
        onLevelChange: handleLevelChange,
        searchQuery,
        onSearchChange: setSearchQuery
    };
    
    return (
        <div className="container py-8 md:py-12">
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
                    {pageTitle}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {pageDescription}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <aside className="hidden md:block md:col-span-1">
                   <FilterSidebar {...filterSidebarProps} />
                </aside>

                <main className="md:col-span-3">
                    <div className="md:hidden mb-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filtros
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <div className="p-4">
                                  <FilterSidebar {...filterSidebarProps} />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="space-y-12">
                        {filteredCourses.length > 0 ? coursesByPath.map((path) => (
                            <section key={path.id}>
                                <h2 className="text-2xl font-bold tracking-tight font-headline md:text-3xl border-b pb-2 mb-6">
                                    {path.title}
                                </h2>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {path.courses.map((course) => (
                                        <CourseCard key={course.id} course={course} />
                                    ))}
                                </div>
                            </section>
                        )) : (
                            <div className="text-center py-16">
                                <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                                <h3 className="mt-4 text-lg font-semibold">No se encontraron cursos</h3>
                                <p className="mt-2 text-sm text-muted-foreground">Intenta ajustar tus filtros de búsqueda.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default function CoursesPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CoursesContent />
        </Suspense>
    );
}
