
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, AlertTriangle, Download, Terminal, GitBranch, Database, Code, Rocket, BookOpen, GitCommit, Bot, Server, FileText, TextCursorInput, Tv, ArrowRightLeft, FileDown, Network, Wrench, Book, Package, HardDrive, Gem, Waypoints } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { termuxProjects, termuxGuides, type TermuxProject } from '@/lib/data';
import { FaJava, FaPhp, FaRust } from 'react-icons/fa';
import { SiGo, SiLua, SiKotlin, SiPerl } from 'react-icons/si';

function CodeBlock({ code }: { code: string }) {
    return (
        <div className="bg-muted text-muted-foreground rounded-lg p-4 my-4 font-mono text-sm relative">
            <pre><code>{code}</code></pre>
        </div>
    );
}

function RequirementsTab() {
    return (
         <Card>
            <CardHeader>
                <CardTitle>Requisitos Básicos</CardTitle>
                <CardDescription>Lo que necesitas para empezar tu viaje de desarrollo en Android.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Sistema operativo: <Badge variant="secondary">Android 8.0 o superior</Badge></li>
                    <li>Aplicación: <Badge variant="secondary">Termux</Badge> (desde F-Droid o GitHub)</li>
                    <li>Espacio disponible: <Badge variant="secondary">mínimo 500 MB</Badge></li>
                    <li>Conexión estable a Internet</li>
                    <li>Acceso a teclado (virtual o físico recomendado)</li>
                </ul>
                    <div className="mt-6 p-4 bg-destructive/10 border-l-4 border-destructive text-destructive-foreground">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 mt-1" />
                        <div>
                            <h4 className="font-bold">¡Importante!</h4>
                            <p>No instales Termux desde la Play Store. Esa versión está obsoleta y no recibe actualizaciones. Descárgalo siempre desde <a href="https://f-droid.org/en/packages/com.termux/" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive">F-Droid</a> o el <a href="https://github.com/termux/termux-app/releases" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive">repositorio oficial de GitHub</a>.</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function LanguagesTab() {
     const languages = [
        { name: "Python", icon: <Bot className="w-6 h-6 text-primary"/>, description: "Ideal para scripting, backend y ciencia de datos.", command: "pkg install python" },
        { name: "Node.js (JavaScript)", icon: <Server className="w-6 h-6 text-primary"/>, description: "Para desarrollo web moderno, tanto frontend como backend.", command: "pkg install nodejs-lts" },
        { name: "Git", icon: <GitCommit className="w-6 h-6 text-primary"/>, description: "Sistema de control de versiones esencial para todo desarrollador.", command: "pkg install git" },
        { name: "Go", icon: <SiGo className="w-6 h-6 text-primary"/>, description: "Lenguaje de Google, rápido y compilado, ideal para CLI y backend.", command: "pkg install golang" },
        { name: "Rust", icon: <FaRust className="w-6 h-6 text-primary"/>, description: "Enfocado en seguridad y rendimiento para programación de sistemas.", command: "pkg install rust" },
        { name: "C/C++", icon: <Code className="w-6 h-6 text-primary"/>, description: "Compilador Clang para lenguajes de bajo nivel.", command: "pkg install clang" },
        { name: "PHP", icon: <FaPhp className="w-6 h-6 text-primary"/>, description: "Un pilar del desarrollo web del lado del servidor.", command: "pkg install php" },
        { name: "Ruby", icon: <Gem className="w-6 h-6 text-primary"/>, description: "Famoso por su sintaxis elegante y el framework Rails.", command: "pkg install ruby" },
        { name: "Java", icon: <FaJava className="w-6 h-6 text-primary"/>, description: "Entorno de desarrollo de Java (OpenJDK 17).", command: "pkg install openjdk-17" },
        { name: "Kotlin", icon: <SiKotlin className="w-6 h-6 text-primary"/>, description: "Compilador para el lenguaje moderno de la JVM.", command: "pkg install kotlin" },
        { name: "Perl", icon: <SiPerl className="w-6 h-6 text-primary"/>, description: "Lenguaje potente para procesamiento de texto y scripting.", command: "pkg install perl" },
        { name: "Lua", icon: <SiLua className="w-6 h-6 text-primary"/>, description: "Lenguaje de script ligero y embebible.", command: "pkg install lua" }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Un Universo de Lenguajes</CardTitle>
                <CardDescription>Termux te da acceso a un vasto ecosistema de lenguajes de programación. Aquí tienes algunos de los más populares y cómo instalarlos.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {languages.map(lang => (
                        <div key={lang.name} className="p-4 bg-muted/50 rounded-lg flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                {lang.icon}
                                <h3 className="font-semibold text-lg text-foreground">{lang.name}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground flex-grow">{lang.description}</p>
                            <CodeBlock code={lang.command} />
                        </div>
                    ))}
                 </div>
            </CardContent>
        </Card>
    )
}

function GuidesTab() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {termuxGuides.map(guide => (
                <Card key={guide.id}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           {guide.id === 'git' && <GitCommit className="w-6 h-6 text-primary" />}
                           {guide.id === 'node' && <Server className="w-6 h-6 text-primary" />}
                           {guide.id === 'python' && <Bot className="w-6 h-6 text-primary" />}
                           {guide.title}
                        </CardTitle>
                        <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                        <ol className="list-decimal list-inside space-y-3">
                            {guide.steps.map((step, index) => (
                                <li key={index}>
                                    <strong className="text-foreground">{step.title}</strong>
                                    <p className="pl-2">{step.description}</p>
                                    <CodeBlock code={step.command} />
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

function ProjectsTab() {
    const [selectedProject, setSelectedProject] = useState<TermuxProject | null>(termuxProjects[0]);

     const ICONS: Record<string, React.ReactNode> = {
        'nodejs': <Server className="w-5 h-5" />,
        'python': <Bot className="w-5 h-5" />,
        'git': <GitCommit className="w-5 h-5" />,
        'static': <FileText className="w-5 h-5" />,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Elige un Proyecto</CardTitle>
                        <CardDescription>Selecciona un proyecto para ver los pasos y empezar a construir.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        {termuxProjects.map((project) => (
                            <Button
                                key={project.id}
                                variant={selectedProject?.id === project.id ? 'default' : 'outline'}
                                onClick={() => setSelectedProject(project)}
                                className="w-full justify-start"
                            >
                                <span className="w-6">{ICONS[project.icon]}</span>
                                {project.title}
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-3">
                 {selectedProject ? (
                    <Card className="border-2 border-primary shadow-lg sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                               <span className="w-8">{ICONS[selectedProject.icon]}</span>
                               {selectedProject.title}
                            </CardTitle>
                            <CardDescription className="text-base pt-2">
                                {selectedProject.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-2">Tecnologías a utilizar:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Pasos a seguir:</h4>
                                     <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                                        <ol className="list-decimal list-inside space-y-3">
                                            {selectedProject.steps.map((step, index) => (
                                                <li key={index}>
                                                    <strong className="text-foreground">{step.title}</strong>
                                                    <p className="pl-2">{step.description}</p>
                                                    {step.command && <CodeBlock code={step.command} />}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="h-full flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
                        <CardContent>
                            <Rocket className="mx-auto h-16 w-16 text-muted-foreground" />
                            <h3 className="mt-4 text-xl font-semibold">Selecciona un Proyecto</h3>
                            <p className="mt-2 text-muted-foreground">
                                Elige un proyecto de la lista para ver la guía y comenzar a programar desde tu móvil.
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}

function ToolsTab() {
    const toolCategories = [
        {
            title: "Editores de Texto en Consola",
            icon: <TextCursorInput className="w-6 h-6 text-primary"/>,
            description: "Para editar código directamente en la terminal.",
            tools: [
                { name: "Nano", command: "pkg install nano", description: "Editor simple y fácil de usar, ideal para principiantes." },
                { name: "Vim", command: "pkg install vim", description: "Editor modal potente y altamente configurable, para usuarios avanzados." },
            ]
        },
        {
            title: "Gestión de Sesiones",
            icon: <Tv className="w-6 h-6 text-primary"/>,
            description: "Mantén tus procesos corriendo incluso si cierras la app.",
            tools: [
                { name: "Tmux", command: "pkg install tmux", description: "Permite crear múltiples sesiones y paneles en una sola terminal. Esencial para el multitasking." },
            ]
        },
        {
            title: "Transferencia de Archivos",
            icon: <FileDown className="w-6 h-6 text-primary"/>,
            description: "Para descargar archivos o interactuar con APIs.",
            tools: [
                { name: "cURL", command: "pkg install curl", description: "Herramienta para transferir datos con URLs. Muy potente para peticiones HTTP." },
                { name: "Wget", command: "pkg install wget", description: "Utilidad para descargar archivos de internet de forma no interactiva." },
            ]
        },
        {
            title: "Diagnóstico de Red",
            icon: <Network className="w-6 h-6 text-primary"/>,
            description: "Conéctate a servidores remotos y analiza tu red.",
            tools: [
                { name: "OpenSSH", command: "pkg install openssh", description: "Permite conectarte a otros servidores de forma segura a través de SSH." },
                { name: "Nmap", command: "pkg install nmap", description: "Escáner de red para descubrir hosts y servicios en una red." },
            ]
        },
        {
            title: "Utilidades del Sistema",
            icon: <Wrench className="w-6 h-6 text-primary"/>,
            description: "Para monitorear y entender mejor tu entorno.",
            tools: [
                { name: "htop", command: "pkg install htop", description: "Monitor de procesos interactivo que muestra el uso de CPU y memoria en tiempo real." },
                { name: "tldr", command: "pkg install tldr", description: "Ofrece ejemplos prácticos y simplificados de cómo usar comandos de consola." },
            ]
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Herramientas y Comandos Útiles</CardTitle>
                <CardDescription>Potencia tu flujo de trabajo en Termux con estas herramientas esenciales.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {toolCategories.map(category => (
                        <div key={category.title}>
                            <div className="flex items-center gap-3 mb-4">
                                {category.icon}
                                <div>
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                    <p className="text-muted-foreground">{category.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {category.tools.map(tool => (
                                    <div key={tool.name} className="p-4 bg-muted/50 rounded-lg">
                                        <h4 className="font-semibold text-foreground">{tool.name}</h4>
                                        <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                                        <CodeBlock code={tool.command} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default function TermuxGuidePage() {
    return (
        <div className="container py-12 md:py-20">
            <header className="text-center mb-12">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <Smartphone className="w-12 h-12 text-primary" />
                    <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
                        Programación sin PC
                    </h1>
                </div>
                <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Aprende a programar, compilar y desplegar proyectos completos directamente desde tu teléfono Android utilizando Termux.
                </p>
            </header>

             <Tabs defaultValue="projects" className="w-full">
                 <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
                    <TabsTrigger value="requirements" className="py-2"><AlertTriangle className="mr-2"/>Requisitos</TabsTrigger>
                    <TabsTrigger value="languages" className="py-2"><Package className="mr-2"/>Lenguajes</TabsTrigger>
                    <TabsTrigger value="guides" className="py-2"><BookOpen className="mr-2"/>Guías</TabsTrigger>
                    <TabsTrigger value="projects" className="py-2"><Rocket className="mr-2"/>Proyectos</TabsTrigger>
                    <TabsTrigger value="tools" className="py-2"><Terminal className="mr-2"/>Herramientas</TabsTrigger>
                </TabsList>
                
                <TabsContent value="requirements" className="mt-8">
                   <RequirementsTab />
                </TabsContent>
                 <TabsContent value="languages" className="mt-8">
                    <LanguagesTab />
                </TabsContent>
                <TabsContent value="guides" className="mt-8">
                   <GuidesTab />
                </TabsContent>
                <TabsContent value="projects" className="mt-8">
                    <ProjectsTab />
                </TabsContent>
                <TabsContent value="tools" className="mt-8">
                    <ToolsTab />
                </TabsContent>
            </Tabs>
        </div>
    );
}

    