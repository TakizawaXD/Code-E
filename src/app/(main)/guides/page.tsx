
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { cn } from "@/lib/utils";
import { 
    Home, 
    Gem, 
    Puzzle, 
    Network, 
    Users, 
    ChevronDown, 
    Play, 
    Menu, 
    Lock,
    CheckCircle2,
    PlayCircle,
    X,
    BrainCircuit,
    Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// --- DATA (Could be moved to a separate JSON/TS file) ---
const contentData = {
    'welcome': `<h1>Una Guía de Entrevistas Diferente</h1>
        <p>Bienvenido a la guía de preparación para entrevistas técnicas de Code-E. Este no es solo un repositorio de algoritmos, es una herramienta viva construida con una filosofía de <strong>aprendizaje práctico y transparente</strong>.</p>
        
        <h3>Propósito y Visión</h3>
        <p>El objetivo es diseñar un sitio web para que desarrolladores, similares a ti y a mí, tengan un lugar gratuito para aprender y dominar los conceptos clave para una entrevista técnica. Requiere inicio de sesión con Google, lo que nos permite capturar métricas de uso de forma anónima. En el futuro, estos datos alimentarán dashboards para entender qué secciones son más útiles y dónde podemos mejorar. Todo el desarrollo se realiza en un <strong>repositorio público</strong>, fomentando la transparencia.</p>
        
        <div class="mt-6 mb-6 p-4 bg-secondary border border-border rounded-lg">
            <h4 class="font-semibold text-foreground">La Misión de este Proyecto</h4>
            <p class="text-muted-foreground mt-2">"Pienso que lo ideal es que el producto salga a producción después de que tú mismo hayas puesto en práctica los conceptos en entrevistas reales, hayas refinado el sitio y hayas conseguido trabajo. Al desarrollar esto, espero que entiendas los conceptos y las prácticas, y así te vuelvas un experto en el tema."</p>
        </div>

        <p>Esta guía es un testimonio del propio proceso de aprendizaje. Cada algoritmo, cada explicación y cada prueba ha sido implementada y refinada con la ayuda de IA, y luego revisada manually, siguiendo el mismo ciclo de feedback que tú experimentarás en tu carrera.</p>
        <p>Usa el menú de la izquierda para navegar. ¡La experimentación es la clave!</p>`,
    'part1-sec1': `<h2>Sección 1: Dominando el Proceso de Aprendizaje</h2><p>El enfoque moderno para la preparación de entrevistas técnicas ha experimentado una transformación fundamental, alejándose de la memorización de soluciones específicas hacia el desarrollo de una comprensión profunda de los patrones de resolución de problemas subyacentes...</p>`,
    'part1-sec2': `<h2>Sección 2: Los Pilares - Estructuras de Datos Fundamentales</h2><p>El dominio de las estructuras de datos es el requisito previo indispensable para la resolución de problemas algorítmicos. Son las herramientas fundamentales con las que un ingeniero organiza y manipula la información.</p>`,
    'part1-sec3': `<h2>Sección 3: El Conjunto de Herramientas - Algoritmos Fundamentales</h2><p>Los algoritmos son los procedimientos paso a paso que operan sobre las estructuras de datos para resolver problemas. Una sólida comprensión de estos algoritmos fundamentales es esencial para construir soluciones eficientes.</p>`,
    'part2-sec4': `<h2>Sección 4: Deconstruyendo Problemas: Los Patrones "Grokking"</h2>
        <h3>4.1 Ventana Deslizante (Sliding Window)</h3><p>Este patrón se utiliza para realizar una operación en una subsección contigua de un array o cadena. La ventana se desliza sobre los datos.</p><h4>Ejemplo: Máxima Suma de Subarray de Tamaño K</h4><div class="code-container" data-id="sliding-window-1"></div>
        <h3>4.2 Dos Punteros (Two Pointers)</h3><p>Utiliza dos punteros que se mueven a través de una estructura de datos (generalmente un array ordenado).</p><h4>Ejemplo: Par con Suma Objetivo</h4><div class="code-container" data-id="two-pointers-1"></div>
        <h3>4.3 Punteros Rápidos y Lentos (Fast & Slow Pointers)</h3><p>También conocido como el algoritmo de la liebre y la tortuga, este patrón utiliza dos punteros que se mueven a diferentes velocidades.</p><h4>Ejemplo: Detección de Ciclo en Lista Enlazada</h4><div class="code-container" data-id="fast-slow-1"></div>
        <h3>4.4 Fusión de Intervalos (Merge Intervals)</h3><p>Este patrón se ocupa de problemas que involucran intervalos superpuestos.</p><h4>Ejemplo: Fusionar Intervalos</h4><div class="code-container" data-id="merge-intervals-1"></div>
        <h3>4.5 Búsqueda en Amplitud (BFS)</h3><p>Un patrón fundamental para recorrer árboles o grafos nivel por nivel. Utiliza una cola para mantener un registro de los nodos a visitar.</p><h4>Ejemplo: Recorrido de Árbol por Nivel</h4><div class="code-container" data-id="bfs-1"></div>
        <h3>4.6 Búsqueda en Profundidad (DFS)</h3><p>Este patrón explora tan profundamente como sea posible a lo largo de cada rama antes de retroceder. Se implementa comúnmente con recursión o una pila.</p><h4>Ejemplo: Recorrido de Árbol Pre-orden</h4><div class="code-container" data-id="dfs-1"></div>
        `,
    'part2-sec5': `<h2>Sección 5: Dominios de Conocimiento Especializados y Avanzados</h2><p>Para destacar en entrevistas en empresas de primer nivel o para roles de mayor antigüedad, el dominio de los patrones fundamentales debe complementarse con conocimientos en áreas más especializadas.</p>`,
    'part3-sec6': `<h2>Sección 6: Fundamentos del Diseño de Sistemas</h2><p>Esta habilidad es un requisito fundamental para ingenieros de nivel medio y superior, ya que evalúa la capacidad de pensar en términos de arquitectura, escalabilidad y fiabilidad.</p>`,
    'part3-sec7': `<h2>Sección 7: El Manual de Juego de la Entrevista de Diseño de Sistemas</h2><p>Una entrevista de diseño de sistemas es una simulación de una reunión de planificación técnica. El proceso es más importante que el resultado final.</p>`,
    'part4-sec8': `<h2>Sección 8: Dominando la Entrevista de Comportamiento</h2><p>Las entrevistas de comportamiento se basan en la premisa de que el comportamiento pasado es el mejor predictor del rendimiento futuro.</p>`,
    'part4-sec9': `<h2>Sección 9: El Proceso de Entrevista Desmitificado (El Metajuego)</h2><p>Comprender la logística y la psicología del proceso de entrevista es una ventaja estratégica.</p>`,
};

const quizData = {
    'part1-quiz': {
        title: 'Cuestionario: La Fundación',
        unlocks: 'part2',
        questions: [
            { id: 'p1q1', q: '¿Qué estructura de datos sigue el principio LIFO (Last-In, First-Out)?', o: ['Cola (Queue)', 'Pila (Stack)', 'Lista Enlazada', 'Árbol'], a: 1 },
            { id: 'p1q2', q: '¿Cuál es la complejidad temporal promedio para buscar un elemento en un Hash Table?', o: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], a: 0 },
            { id: 'p1q3', q: '¿Qué estructura de datos es más adecuada para implementar una cola de prioridad?', o: ['Array no ordenado', 'Pila (Stack)', 'Montículo (Heap)', 'Hash Table'], a: 2 },
            { id: 'p1q4', q: '¿En qué consiste el principio de "divide y vencerás"?', o: ['Dividir un problema en subproblemas más pequeños, resolverlos y combinar las soluciones.', 'Iterar sobre un problema hasta encontrar la solución.', 'Almacenar resultados de subproblemas para evitar recalcularlos.', 'Probar todas las soluciones posibles una por una.'], a: 0 },
            { id: 'p1q5', q: 'Un nodo en un árbol binario de búsqueda, ¿qué propiedad cumple?', o: ['Todos los nodos a su izquierda son mayores.', 'Todos los nodos a su derecha son menores.', 'Todos los nodos en su subárbol izquierdo son menores que el nodo.', 'No tiene ninguna propiedad de orden.'], a: 2 },
        ]
    },
    'part2-quiz': {
        title: 'Cuestionario: La Aplicación',
        unlocks: 'part3',
        questions: [
            { id: 'p2q1', q: 'El patrón "Sliding Window" (Ventana Deslizante) es más útil para problemas que involucran:', o: ['Listas enlazadas con ciclos.', 'Subarrays o substrings contiguos.', 'Árboles y grafos.', 'Ordenamiento de elementos.'], a: 1 },
            { id: 'p2q2', q: '¿En qué tipo de array el patrón "Two Pointers" (Dos Punteros) es especialmente efectivo?', o: ['En un array no ordenado.', 'En un array ordenado.', 'Solo en arrays de strings.', 'En arrays multidimensionales.'], a: 1 },
            { id: 'p2q3', q: 'El algoritmo de la "Liebre y la Tortuga" es un método clásico para:', o: ['Encontrar el elemento medio de un array.', 'Fusionar dos intervalos.', 'Detectar un ciclo en una lista enlazada.', 'Recorrer un árbol nivel por nivel.'], a: 2 },
        ]
    },
    // Add more quizzes here...
};

const codeExamples = {
    'sliding-window-1': `/*\n  Dado un array de enteros positivos y un número positivo 'k', \n  encuentra la suma máxima de cualquier subarray contiguo de tamaño 'k'.\n*/\nfunction findMaxSumSubarray(arr, k) {\n  let maxSum = 0;\n  let windowSum = 0;\n  let windowStart = 0;\n\n  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {\n    windowSum += arr[windowEnd]; // Añade el siguiente elemento a la ventana\n\n    // Desliza la ventana cuando hemos alcanzado el tamaño 'k'\n    if (windowEnd >= k - 1) {\n      maxSum = Math.max(maxSum, windowSum); // Actualiza la suma máxima\n      windowSum -= arr[windowStart]; // Resta el elemento que sale de la ventana\n      windowStart += 1; // Desliza la ventana hacia adelante\n    }\n  }\n  return maxSum;\n}\n\n// --- Pruebas ---\nconsole.log("Suma máxima de subarray de tamaño 3:");\nconsole.log(findMaxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Salida esperada: 9\n\nconsole.log("\\nSuma máxima de subarray de tamaño 2:");\nconsole.log(findMaxSumSubarray([2, 3, 4, 1, 5], 2)); // Salida esperada: 7`,
    'two-pointers-1': `/*\n  Dado un array de números ordenados y un número objetivo, \n  encuentra un par en el array cuya suma sea igual al objetivo.\n  Devuelve los índices de los dos números.\n*/\nfunction searchPair(arr, targetSum) {\n  let left = 0;\n  let right = arr.length - 1;\n\n  while (left < right) {\n    const currentSum = arr[left] + arr[right];\n    if (currentSum === targetSum) {\n      return [left, right]; // Par encontrado\n    }\n\n    if (targetSum > currentSum) {\n      left += 1; // Necesitamos un par con una suma mayor\n    } else {\n      right -= 1; // Necesitamos un par con una suma menor\n    }\n  }\n  return [-1, -1]; // Par no encontrado\n}\n\n// --- Pruebas ---\nconsole.log("Par con suma 6:");\nconsole.log(searchPair([1, 2, 3, 4, 6], 6)); // Salida esperada: [1, 3]\n\nconsole.log("\\nPar con suma 11:");\nconsole.log(searchPair([2, 5, 9, 11], 11)); // Salida esperada: [0, 2]`,
    'fast-slow-1': `/*\n  Dada la cabeza de una lista enlazada, determina si tiene un ciclo.\n*/\n\n// Definición de la clase para el nodo de la lista\nclass Node {\n  constructor(value, next = null) {\n    this.value = value;\n    this.next = next;\n  }\n}\n\nfunction hasCycle(head) {\n  let slow = head;\n  let fast = head;\n\n  while (fast !== null && fast.next !== null) {\n    fast = fast.next.next;\n    slow = slow.next;\n    if (slow === fast) {\n      return true; // Ciclo encontrado\n    }\n  }\n  return false;\n}\n\n// --- Pruebas ---\nconst head1 = new Node(1);\nhead1.next = new Node(2);\nhead1.next.next = new Node(3);\nhead1.next.next.next = new Node(4);\nhead1.next.next.next.next = new Node(5);\nhead1.next.next.next.next.next = head1.next.next; // Crear ciclo\n\nconsole.log("Lista 1 tiene ciclo:", hasCycle(head1)); // Salida esperada: true\n\nconst head2 = new Node(1);\nhead2.next = new Node(2);\nhead2.next.next = new Node(3);\n\nconsole.log("Lista 2 tiene ciclo:", hasCycle(head2)); // Salida esperada: false`,
    'merge-intervals-1': `/*\n  Dados una colección de intervalos, fusiona todos los intervalos superpuestos.\n*/\n\nclass Interval {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n  }\n  \n  toString() {\n    return \`[\${this.start}, \${this.end}]\`;\n  }\n}\n\nfunction merge(intervals) {\n  if (intervals.length < 2) {\n    return intervals;\n  }\n\n  // Ordenar los intervalos por el inicio\n  intervals.sort((a, b) => a.start - b.start);\n\n  const mergedIntervals = [];\n  let start = intervals[0].start;\n  let end = intervals[0].end;\n\n  for (let i = 1; i < intervals.length; i++) {\n    const interval = intervals[i];\n    if (interval.start <= end) { // Hay superposición\n      end = Math.max(end, interval.end);\n    } else { // No hay superposición\n      mergedIntervals.push(new Interval(start, end));\n      start = interval.start;\n      end = interval.end;\n    }\n  }\n\n  // Añadir el último intervalo\n  mergedIntervals.push(new Interval(start, end));\n  return mergedIntervals;\n}\n\n// --- Pruebas ---\nlet result = merge([\n  new Interval(1, 4),\n  new Interval(2, 5),\n  new Interval(7, 9)\n]);\nconsole.log("Intervalos fusionados: " + result.map(i => i.toString()).join(', '));\n// Salida esperada: [1, 5], [7, 9]\n\nresult = merge([\n  new Interval(6, 7),\n  new Interval(2, 4),\n  new Interval(5, 9)\n]);\nconsole.log("Intervalos fusionados: " + result.map(i => i.toString()).join(', '));\n// Salida esperada: [2, 4], [5, 9]`,
    'bfs-1': `/*\n  Dado un árbol binario, devuelve un recorrido por niveles de los valores de sus nodos.\n*/\n\n// Definición de la clase para el nodo del árbol\nclass TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction traverse(root) {\n  if (!root) {\n    return [];\n  }\n\n  const result = [];\n  const queue = [root];\n\n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      let currentNode = queue.shift();\n      currentLevel.push(currentNode.val);\n      if (currentNode.left) {\n        queue.push(currentNode.left);\n      }\n      if (currentNode.right) {\n        queue.push(currentNode.right);\n      }\n    }\n    result.push(currentLevel);\n  }\n  return result;\n}\n\n// --- Pruebas ---\nconst root = new TreeNode(12);\nroot.left = new TreeNode(7);\nroot.right = new TreeNode(1);\nroot.left.left = new TreeNode(9);\nroot.right.left = new TreeNode(10);\nroot.right.right = new TreeNode(5);\n\nconsole.log("Recorrido por niveles:", JSON.stringify(traverse(root)));\n// Salida esperada: [[12],[7,1],[9,10,5]]`,
    'dfs-1': `/*\n  Dado un árbol binario, realiza un recorrido en pre-orden (Raíz, Izquierda, Derecha).\n*/\n\n// Definición de la clase para el nodo del árbol\nclass TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction traversePreOrder(root) {\n  const result = [];\n  \n  function dfs(node) {\n    if (!node) {\n      return;\n    }\n    // Visita el nodo actual (raíz del sub-árbol)\n    result.push(node.val);\n    // Recorre el sub-árbol izquierdo\n    dfs(node.left);\n    // Recorre el sub-árbol derecho\n    dfs(node.right);\n  }\n\n  dfs(root);\n  return result;\n}\n\n// --- Pruebas ---\nconst root = new TreeNode(12);\nroot.left = new TreeNode(7);\nroot.right = new TreeNode(1);\nroot.left.left = new TreeNode(9);\nroot.right.left = new TreeNode(10);\nroot.right.right = new TreeNode(5);\n\nconsole.log("Recorrido DFS (Pre-orden):", traversePreOrder(root).join(', '));\n// Salida esperada: 12, 7, 9, 1, 10, 5`
};

const navStructure = [
    { title: 'Bienvenida', id: 'welcome', icon: <Home/> },
    { 
        id: 'part1', title: 'Parte I: La Fundación', icon: <Gem />, children: [
            { title: '1. El Proceso de Aprendizaje', id: 'part1-sec1' },
            { title: '2. Estructuras de Datos', id: 'part1-sec2' },
            { title: '3. Algoritmos Fundamentales', id: 'part1-sec3' },
            { title: 'Cuestionario: La Fundación', id: 'part1-quiz' },
        ] 
    },
    { 
        id: 'part2', title: 'Parte II: La Aplicación', icon: <Puzzle />, children: [
            { title: '4. Patrones de "Grokking"', id: 'part2-sec4' },
            { title: '5. Temas Avanzados', id: 'part2-sec5' },
            { title: 'Cuestionario: La Aplicación', id: 'part2-quiz' },
        ] 
    },
    { 
        id: 'part3', title: 'Parte III: El Arquitecto', icon: <Network />, children: [
            { title: '6. Fundamentos de Sist. Diseño', id: 'part3-sec6' },
            { title: '7. Manual de Sist. Diseño', id: 'part3-sec7' },
            { title: 'Cuestionario: El Arquitecto', id: 'part3-quiz' },
        ] 
    },
    { 
        id: 'part4', title: 'Parte IV: El Elemento Humano', icon: <Users />, children: [
            { title: '8. Entrevistas de Comportamiento', id: 'part4-sec8' },
            { title: '9. El Metajuego del Proceso', id: 'part4-sec9' },
            { title: 'Cuestionario: El Elemento Humano', id: 'part4-quiz' },
        ] 
    }
];


// --- REACT COMPONENTS ---

const CodeRunner = ({ codeId, onRun, onExplain, onTest }) => {
    const [editor, setEditor] = useState(null);
    const [output, setOutput] = useState([]);
    const [error, setError] = useState('');
    const editorRef = React.useRef(null);

    useEffect(() => {
        if (!window.CodeMirror) return;
        
        const cm = window.CodeMirror(editorRef.current, {
            value: codeExamples[codeId],
            mode: 'javascript',
            theme: 'material-darker',
            lineNumbers: true,
            lineWrapping: true,
        });
        setEditor(cm);

        return () => {
            // Cleanup: No standard way to destroy a CodeMirror instance.
            // We just clear the DOM element.
            if (editorRef.current) {
                editorRef.current.innerHTML = '';
            }
        };
    }, [codeId]);

    const runCode = () => {
        if (!editor) return;
        const code = editor.getValue();
        setOutput([]);
        setError('');

        const capturedLogs = [];
        const originalLog = console.log;
        console.log = (...args) => {
            capturedLogs.push(args.map(arg => {
                if (typeof arg === 'object' && arg !== null) {
                    try { return JSON.stringify(arg, null, 2); } catch (e) { return '[Object]'; }
                }
                return arg;
            }).join(' '));
        };

        try {
            new Function(code)();
            setOutput(capturedLogs);
        } catch (e) {
            setError(e.stack);
        } finally {
            console.log = originalLog;
        }
    };
    
    const resetCode = () => {
        if (editor) {
            editor.setValue(codeExamples[codeId]);
        }
    };

    return (
        <Card className="my-6">
            <CardContent className="p-0">
                <div ref={editorRef} className="code-editor-container"></div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 p-4 bg-muted/50">
                 <div className="w-full flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                         <Dialog>
                            <DialogTrigger asChild>
                                <Button size="sm" variant="outline"><Lightbulb className="mr-2 h-4 w-4" />Explicación con IA</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Explicación del Código</DialogTitle>
                                </DialogHeader>
                                <div className="prose prose-sm dark:prose-invert">
                                    <p>Esta es una explicación generada por IA sobre el patrón de código:</p>
                                    <p>El patrón <strong>Ventana Deslizante</strong> es una técnica muy eficiente para procesar arrays o listas. Imagina una "ventana" de un tamaño fijo `k` que se "desliza" sobre los datos, un elemento a la vez.</p>
                                    <ul>
                                        <li>Se mantiene una suma (o cualquier otra métrica) de los elementos dentro de la ventana.</li>
                                        <li>Cuando la ventana se desliza, en lugar de recalcular todo, simplemente <strong>se añade el nuevo elemento</strong> que entra en la ventana y <strong>se resta el elemento que sale</strong>.</li>
                                        <li>Esto reduce la complejidad de O(N*k) a O(N), lo cual es una mejora masiva para grandes conjuntos de datos.</li>
                                    </ul>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" variant="ghost" onClick={resetCode}>Reiniciar</Button>
                        <Button size="sm" onClick={runCode}><Play className="mr-2 h-4 w-4"/>Ejecutar</Button>
                    </div>
                </div>
                {(output.length > 0 || error) && (
                     <div className="w-full mt-4 p-4 rounded-md bg-background text-sm font-mono">
                        <h4 className="font-sans font-semibold mb-2 text-muted-foreground">Salida:</h4>
                        {error ? (
                            <pre className="text-destructive whitespace-pre-wrap">{error}</pre>
                        ) : (
                            <pre className="whitespace-pre-wrap">{output.join('\n')}</pre>
                        )}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

const Quiz = ({ quizId, onPass }) => {
    const quiz = quizData[quizId];
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    if (!quiz) return <p>Cuestionario no encontrado.</p>;
    
    const { questions } = quiz;

    const handleSelect = (questionId, answerIndex) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.a ? 1 : 0), 0);
        if ((score / questions.length) >= 0.8 && onPass) {
            onPass(quiz.unlocks);
        }
    };
    
    const handleRetry = () => {
      setIsSubmitted(false);
      setAnswers({});
    }

    const score = isSubmitted ? questions.reduce((acc, q) => acc + (answers[q.id] === q.a ? 1 : 0), 0) : 0;
    const percentage = isSubmitted ? (score / questions.length) * 100 : 0;

    return (
        <Card className="my-8">
            <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                {!isSubmitted && <CardDescription>Selecciona la respuesta correcta para cada pregunta.</CardDescription>}
            </CardHeader>
            <CardContent>
                {isSubmitted ? (
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold">
                            {score} / {questions.length}
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Tu puntuación: {percentage.toFixed(0)}%
                        </p>
                        {percentage >= 80 ? (
                            <p className="text-green-500 font-semibold flex items-center justify-center gap-2">
                            <CheckCircle2 /> ¡Excelente! Has desbloqueado la siguiente sección.
                            </p>
                        ) : (
                            <p className="text-orange-500 font-semibold">Necesitas al menos 80% para pasar. ¡Sigue intentando!</p>
                        )}
                    </div>
                ) : (
                    <div className="space-y-8">
                        {questions.map((q, qIndex) => (
                            <div key={q.id}>
                                <p className="font-semibold mb-4">{qIndex + 1}. {q.q}</p>
                                <RadioGroup value={answers[q.id]?.toString()} onValueChange={(val) => handleSelect(q.id, parseInt(val))}>
                                    {q.o.map((option, oIndex) => (
                                        <div key={oIndex} className="flex items-center space-x-2">
                                            <RadioGroupItem value={oIndex.toString()} id={`${q.id}-${oIndex}`} />
                                            <Label htmlFor={`${q.id}-${oIndex}`}>{option}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
             <CardFooter>
                {isSubmitted ? (
                    <Button onClick={handleRetry} className="w-full">Intentar de Nuevo</Button>
                ) : (
                    <Button onClick={handleSubmit} className="w-full" disabled={Object.keys(answers).length !== questions.length}>
                        Calificar Cuestionario
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

export default function GuidesPage() {
    const [currentSectionId, setCurrentSectionId] = useState('welcome');
    const [unlockedParts, setUnlockedParts] = useState({'part1': true});
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    
    // Load state from localStorage on mount
    useEffect(() => {
        const savedState = localStorage.getItem('guideUnlockedParts');
        if (savedState) {
            setUnlockedParts(JSON.parse(savedState));
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('guideUnlockedParts', JSON.stringify(unlockedParts));
    }, [unlockedParts]);

    const handlePassQuiz = (partToUnlock) => {
        if (partToUnlock) {
            setUnlockedParts(prev => ({ ...prev, [partToUnlock]: true }));
        }
    };
    
    const handleSelectSection = (id) => {
        setCurrentSectionId(id);
        setSidebarOpen(false); // Close sidebar on selection
    }

    const currentSectionTitle = useMemo(() => {
        for (const part of navStructure) {
            if (part.id === currentSectionId) return part.title;
            if (part.children) {
                const child = part.children.find(c => c.id === currentSectionId);
                if (child) return child.title;
            }
        }
        return 'Bienvenido';
    }, [currentSectionId]);
    
    const renderContent = () => {
        if (currentSectionId.includes('-quiz')) {
            return <Quiz quizId={currentSectionId} onPass={handlePassQuiz} />;
        }

        const htmlContent = contentData[currentSectionId] || '<p>Contenido no disponible.</p>';
        const contentWithPlaceholders = htmlContent.replace(/<div class="code-container" data-id="([^"]+)"><\/div>/g, (match, p1) => {
            return `<div id="code-runner-${p1}"></div>`;
        });
        
        return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentWithPlaceholders }} />;
    };
    
    useEffect(() => {
        if (currentSectionId.includes('-quiz')) return;
        
        const codeContainers = document.querySelectorAll('.code-editor-container');
        codeContainers.forEach(container => {
           if(container.parentElement) {
              const runnerId = container.parentElement.id.replace('code-runner-', '');
              if(runnerId) {
                  // This is a workaround since we can't directly render React components into innerHTML
                  // In a real app, we'd parse the content and map placeholders to components
              }
           }
        });
    }, [currentSectionId]);


    const Sidebar = () => (
         <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-background border-r transform transition-transform duration-300 md:relative md:translate-x-0 md:border-r",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <div className="p-4 flex justify-between items-center md:hidden">
                <h2 className="text-lg font-bold">Menú</h2>
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <X className="h-5 w-5"/>
                </Button>
            </div>
            <nav className="p-4 space-y-2">
                {navStructure.map(item => {
                    const isPartUnlocked = !!unlockedParts[item.id] || !item.id.startsWith('part');
                    if (item.children) {
                        return (
                             <details key={item.id} className="group" open={item.id === 'part1'}>
                                <summary className={cn(
                                    "flex items-center px-3 py-2 text-sm font-semibold uppercase text-muted-foreground tracking-wider cursor-pointer list-none rounded-md",
                                    !isPartUnlocked && 'opacity-50'
                                )}>
                                    {item.icon}
                                    <span className="ml-3">{item.title}</span>
                                    {isPartUnlocked ? (
                                        <ChevronDown className="w-5 h-5 ml-auto transition-transform duration-200 group-open:rotate-180"/>
                                    ) : (
                                        <Lock className="w-4 h-4 ml-auto"/>
                                    )}
                                </summary>
                                {isPartUnlocked && (
                                    <div className="mt-1 space-y-1 pl-4">
                                        {item.children.map(child => (
                                            <a key={child.id} href="#"
                                               className={cn(
                                                "flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent",
                                                currentSectionId === child.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                                               )}
                                               onClick={(e) => { e.preventDefault(); handleSelectSection(child.id); }}
                                            >
                                                {child.title.includes('Cuestionario') ? <BrainCircuit className="mr-2 h-4 w-4"/> : <PlayCircle className="mr-2 h-4 w-4"/>}
                                                {child.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                             </details>
                        )
                    }
                    return (
                        <a key={item.id} href="#"
                           className={cn(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent",
                             currentSectionId === item.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                           )}
                            onClick={(e) => { e.preventDefault(); handleSelectSection(item.id); }}
                        >
                            {item.icon}
                           <span className="ml-3">{item.title}</span>
                        </a>
                    )
                })}
            </nav>
        </aside>
    );

    return (
        <>
            <Head>
                <title>Guía de Entrevistas Interactiva</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/material-darker.min.css" />
            </Head>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js" strategy="lazyOnload" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/javascript/javascript.min.js" strategy="lazyOnload" />

            <div className="flex h-[calc(100vh-4rem)]">
                <Sidebar />
                <main className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex items-center justify-between border-b p-4">
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                            <Menu/>
                        </Button>
                        <h1 className="text-xl font-semibold">{currentSectionTitle}</h1>
                        <div>{/* Placeholder for other actions */}</div>
                    </header>
                    <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
                         <div className="max-w-4xl mx-auto">
                           {renderContent()}
                           {currentSectionId === 'part2-sec4' && (
                               <>
                                <div id="code-runner-sliding-window-1"><CodeRunner codeId="sliding-window-1" /></div>
                                <div id="code-runner-two-pointers-1"><CodeRunner codeId="two-pointers-1" /></div>
                                <div id="code-runner-fast-slow-1"><CodeRunner codeId="fast-slow-1" /></div>
                                <div id="code-runner-merge-intervals-1"><CodeRunner codeId="merge-intervals-1" /></div>
                                <div id="code-runner-bfs-1"><CodeRunner codeId="bfs-1" /></div>
                                <div id="code-runner-dfs-1"><CodeRunner codeId="dfs-1" /></div>
                               </>
                           )}
                         </div>
                    </div>
                </main>
            </div>
        </>
    );
}

// Add this to avoid issues with window not being defined on server
declare global {
  interface Window {
    CodeMirror: any;
  }
}
