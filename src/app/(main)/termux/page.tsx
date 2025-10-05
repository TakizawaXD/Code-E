
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

                <Card>
                    <CardHeader>
                        <CardTitle>Lenguajes Soportados</CardTitle>
                        <CardDescription>Termux es un entorno Linux, por lo que puedes instalar casi cualquier lenguaje popular.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg">Python</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Ideal para scripting, ciencia de datos y desarrollo web.</p>
                            <CodeBlock code="pkg install python" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Node.js (JavaScript/TypeScript)</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Perfecto para desarrollo web frontend y backend.</p>
                            <CodeBlock code="pkg install nodejs" />
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg">Git</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Fundamental para el control de versiones de tus proyectos.</p>
                            <CodeBlock code="pkg install git" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Go</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Un lenguaje compilado de Google, excelente para herramientas de alto rendimiento.</p>
                            <CodeBlock code="pkg install golang" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Rust</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Enfocado en seguridad y rendimiento para programación de sistemas.</p>
                            <CodeBlock code="pkg install rust" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">PHP</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Ampliamente utilizado para el desarrollo web del lado del servidor.</p>
                            <CodeBlock code="pkg install php" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Ruby</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Conocido por su elegancia y el popular framework Ruby on Rails.</p>
                            <CodeBlock code="pkg install ruby" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Java</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Instala OpenJDK para compilar y ejecutar aplicaciones Java.</p>
                            <CodeBlock code="pkg install openjdk-17" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Kotlin</h3>
                            <p className="text-muted-foreground mt-1 mb-2">El lenguaje moderno preferido para el desarrollo de Android, también usable en servidor.</p>
                            <CodeBlock code="pkg install kotlin" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">C/C++</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Instala el compilador Clang para trabajar con C y C++.</p>
                            <CodeBlock code="pkg install clang" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Perl</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Un lenguaje veterano y potente para el procesamiento de texto y scripting.</p>
                            <CodeBlock code="pkg install perl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Lua</h3>
                            <p className="text-muted-foreground mt-1 mb-2">Un lenguaje de script ligero y rápido, popular en el desarrollo de videojuegos.</p>
                            <CodeBlock code="pkg install lua" />
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
