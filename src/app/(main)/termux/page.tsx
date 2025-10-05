import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, AlertTriangle, Download, Terminal, GitBranch, Database, Code, Rocket, BookOpen } from 'lucide-react';

function CodeBlock({ code }: { code: string }) {
    return (
        <div className="bg-muted text-muted-foreground rounded-lg p-4 my-4 font-mono text-sm relative">
            <pre><code>{code}</code></pre>
        </div>
    );
}

export default function TermuxGuidePage() {
    return (
        <div className="container py-12 md:py-20 max-w-4xl mx-auto">
            <header className="text-center mb-12">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <Smartphone className="w-12 h-12 text-primary" />
                    <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
                        Programación sin PC
                    </h1>
                </div>
                <p className="mt-3 text-lg text-muted-foreground">
                    Aprende a programar, compilar y desplegar proyectos completos directamente desde tu teléfono Android utilizando Termux.
                </p>
            </header>

            <div className="space-y-12">
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

                <Card>
                    <CardHeader>
                        <CardTitle>Configuración Inicial</CardTitle>
                        <CardDescription>Prepara tu entorno Termux para el desarrollo.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <h3 className="font-semibold text-lg flex items-center gap-2"><Terminal className="w-5 h-5"/>1. Actualizar Termux</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Este es el primer comando que debes ejecutar. Mantendrá todos los paquetes base actualizados y seguros.</p>
                            <CodeBlock code="pkg update && pkg upgrade -y" />
                        </div>
                    </CardContent>
                </Card>

                 <div className="text-center py-8">
                    <p className="text-2xl font-bold text-primary animate-pulse">¡Más contenido próximamente!</p>
                    <p className="text-muted-foreground mt-2">Estamos trabajando para traerte guías detalladas sobre Git, Node.js, Python y mucho más.</p>
                </div>

            </div>
        </div>
    );
}
