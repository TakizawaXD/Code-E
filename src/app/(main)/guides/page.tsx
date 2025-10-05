
'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function GuidesPage() {
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) return;
        isMounted.current = true;

        const init = async () => {
            // Wait for Lucide and Marked to be available
            await new Promise(resolve => {
                const interval = setInterval(() => {
                    if (window.lucide && window.marked && window.CodeMirror) {
                        clearInterval(interval);
                        resolve(true);
                    }
                }, 100);
            });
            
             // --- DATA ---
            const contentData = {
                'welcome': `<h1>Una Guía de Entrevistas Diferente</h1>
                    <p>Bienvenido a la guía de preparación para entrevistas técnicas de Code-E. Este no es solo un repositorio de algoritmos, es una herramienta viva construida con una filosofía de <strong>aprendizaje práctico y transparente</strong>.</p>
                    
                    <h3>Propósito y Visión</h3>
                    <p>El objetivo es simple: diseñar un sitio web para que desarrolladores, similares a ti y a mí, tengan un lugar gratuito para aprender y dominar los conceptos clave para una entrevista técnica. Aquí, no solo leerás teoría, sino que podrás <strong>ejecutar, modificar y probar</strong> cada ejemplo de código directamente en tu navegador.</p>
                    
                    <div class="mt-6 mb-6 p-4 bg-secondary/50 border border-border rounded-lg">
                        <h4 class="font-semibold text-foreground">La Misión de este Proyecto</h4>
                        <p class="text-muted-foreground mt-2">"Pienso que lo ideal es que el producto salga a producción después de que tú mismo hayas puesto en práctica los conceptos en entrevistas reales, hayas refinado el sitio y hayas conseguido trabajo. Al desarrollar esto, espero que entiendas los conceptos y las prácticas, y así te vuelvas un experto en el tema."</p>
                    </div>

                    <h3>Arquitectura y Métricas</h3>
                    <p>Este proyecto se construye sobre una base de Next.js, React y Firebase. Requiere inicio de sesión con Google, lo que nos permite capturar métricas de uso de forma anónima. En el futuro, estos datos alimentarán dashboards para entender qué secciones son más útiles y dónde podemos mejorar. Todo el desarrollo se realiza en un <strong>repositorio público</strong>, fomentando la transparencia.</p>

                    <p>Esta guía es un testimonio del propio proceso de aprendizaje. Cada algoritmo, cada explicación y cada prueba ha sido implementada y refinada con la ayuda de IA, y luego revisada manualmente, siguiendo el mismo ciclo de feedback que tú experimentarás en tu carrera.</p>
                    <p>Usa el menú de la izquierda para navegar. ¡La experimentación es la clave!</p>`,
                'part1-sec1': `<h1>Parte I: La Fundación</h1><h2>Sección 1: Dominando el Proceso de Aprendizaje</h2><p>El enfoque moderno para la preparación de entrevistas técnicas ha experimentado una transformación fundamental, alejándose de la memorización de soluciones específicas hacia el desarrollo de una comprensión profunda de los patrones de resolución de problemas subyacentes...</p>`,
                'part1-sec2': `<h2>Sección 2: Los Pilares - Estructuras de Datos Fundamentales</h2><p>El dominio de las estructuras de datos es el requisito previo indispensable para la resolución de problemas algorítmicos. Son las herramientas fundamentales con las que un ingeniero organiza y manipula la información.</p>`,
                'part1-sec3': `<h2>Sección 3: El Conjunto de Herramientas - Algoritmos Fundamentales</h2><p>Los algoritmos son los procedimientos paso a paso que operan sobre las estructuras de datos para resolver problemas. Una sólida comprensión de estos algoritmos fundamentales es esencial para construir soluciones eficientes.</p>`,
                'part2-sec4': `<h1>Parte II: La Aplicación</h1><h2>Sección 4: Deconstruyendo Problemas: Los Patrones "Grokking"</h2>
                    <h3>4.1 Ventana Deslizante (Sliding Window)</h3><p>Este patrón se utiliza para realizar una operación en una subsección contigua de un array o cadena. La ventana se desliza sobre los datos.</p><h4>Ejemplo: Máxima Suma de Subarray de Tamaño K</h4><div class="code-container" data-id="sliding-window-1"></div>
                    <h3>4.2 Dos Punteros (Two Pointers)</h3><p>Utiliza dos punteros que se mueven a través de una estructura de datos (generalmente un array ordenado).</p><h4>Ejemplo: Par con Suma Objetivo</h4><div class="code-container" data-id="two-pointers-1"></div>
                    <h3>4.3 Punteros Rápidos y Lentos (Fast & Slow Pointers)</h3><p>También conocido como el algoritmo de la liebre y la tortuga, este patrón utiliza dos punteros que se mueven a diferentes velocidades.</p><h4>Ejemplo: Detección de Ciclo en Lista Enlazada</h4><div class="code-container" data-id="fast-slow-1"></div>
                    <h3>4.4 Fusión de Intervalos (Merge Intervals)</h3><p>Este patrón se ocupa de problemas que involucran intervalos superpuestos.</p><h4>Ejemplo: Fusionar Intervalos</h4><div class="code-container" data-id="merge-intervals-1"></div>
                    <h3>4.5 Búsqueda en Amplitud (Breadth-First Search - BFS)</h3><p>Un patrón fundamental para recorrer árboles o grafos nivel por nivel. Utiliza una cola para mantener un registro de los nodos a visitar.</p><h4>Ejemplo: Recorrido de Árbol por Nivel</h4><div class="code-container" data-id="bfs-1"></div>
                    <h3>4.6 Búsqueda en Profundidad (Depth-First Search - DFS)</h3><p>Este patrón explora tan profundamente como sea posible a lo largo de cada rama antes de retroceder. Se implementa comúnmente con recursión o una pila.</p><h4>Ejemplo: Recorrido de Árbol Pre-orden</h4><div class="code-container" data-id="dfs-1"></div>
                    `,
                'part2-sec5': `<h2>Sección 5: Dominios de Conocimiento Especializados y Avanzados</h2><p>Para destacar en entrevistas en empresas de primer nivel o para roles de mayor antigüedad, el dominio de los patrones fundamentales debe complementarse con conocimientos en áreas más especializadas.</p>`,
                'part3-sec6': `<h1>Parte III: El Arquitecto</h1><h2>Sección 6: Fundamentos del Diseño de Sistemas</h2><p>Esta habilidad es un requisito fundamental para ingenieros de nivel medio y superior, ya que evalúa la capacidad de pensar en términos de arquitectura, escalabilidad y fiabilidad.</p>`,
                'part3-sec7': `<h2>Sección 7: El Manual de Juego de la Entrevista de Diseño de Sistemas</h2><p>Una entrevista de diseño de sistemas es una simulación de una reunión de planificación técnica. El proceso es más importante que el resultado final.</p>`,
                'part4-sec8': `<h1>Parte IV: El Elemento Humano</h1><h2>Sección 8: Dominando la Entrevista de Comportamiento</h2><p>Las entrevistas de comportamiento se basan en la premisa de que el comportamiento pasado es el mejor predictor del rendimiento futuro.</p>`,
                'part4-sec9': `<h2>Sección 9: El Proceso de Entrevista Desmitificado (El Metajuego)</h2><p>Comprender la logística y la psicología del proceso de entrevista es una ventaja estratégica.</p>`,
            };
            
            const codeExamples = {
                'sliding-window-1': `/*\n  Dado un array de enteros positivos y un número positivo 'k', \n  encuentra la suma máxima de cualquier subarray contiguo de tamaño 'k'.\n*/\nfunction findMaxSumSubarray(arr, k) {\n  let maxSum = 0;\n  let windowSum = 0;\n  let windowStart = 0;\n\n  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {\n    windowSum += arr[windowEnd]; // Añade el siguiente elemento a la ventana\n\n    // Desliza la ventana cuando hemos alcanzado el tamaño 'k'\n    if (windowEnd >= k - 1) {\n      maxSum = Math.max(maxSum, windowSum); // Actualiza la suma máxima\n      windowSum -= arr[windowStart]; // Resta el elemento que sale de la ventana\n      windowStart += 1; // Desliza la ventana hacia adelante\n    }\n  }\n  return maxSum;\n}\n\n// --- Pruebas ---\nconsole.log("Suma máxima de subarray de tamaño 3:");\nconsole.log(findMaxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Salida esperada: 9\n\nconsole.log("\\nSuma máxima de subarray de tamaño 2:");\nconsole.log(findMaxSumSubarray([2, 3, 4, 1, 5], 2)); // Salida esperada: 7`,
                'two-pointers-1': `/*\n  Dado un array de números ordenados y un número objetivo, \n  encuentra un par en el array cuya suma sea igual al objetivo.\n  Devuelve los índices de los dos números.\n*/\nfunction searchPair(arr, targetSum) {\n  let left = 0;\n  let right = arr.length - 1;\n\n  while (left < right) {\n    const currentSum = arr[left] + arr[right];\n    if (currentSum === targetSum) {\n      return [left, right]; // Par encontrado\n    }\n\n    if (targetSum > currentSum) {\n      left += 1; // Necesitamos un par con una suma mayor\n    } else {\n      right -= 1; // Necesitamos un par con una suma menor\n    }\n  }\n  return [-1, -1]; // Par no encontrado\n}\n\n// --- Pruebas ---\nconsole.log("Par con suma 6:");\nconsole.log(searchPair([1, 2, 3, 4, 6], 6)); // Salida esperada: [1, 3]\n\nconsole.log("\\nPar con suma 11:");\nconsole.log(searchPair([2, 5, 9, 11], 11)); // Salida esperada: [0, 2]`,
                'fast-slow-1': `/*\n  Dada la cabeza de una lista enlazada, determina si tiene un ciclo.\n*/\n\n// Definición de la clase para el nodo de la lista\nclass Node {\n  constructor(value, next = null) {\n    this.value = value;\n    this.next = next;\n  }\n}\n\nfunction hasCycle(head) {\n  let slow = head;\n  let fast = head;\n\n  while (fast !== null && fast.next !== null) {\n    fast = fast.next.next;\n    slow = slow.next;\n    if (slow === fast) {\n      return true; // Ciclo encontrado\n    }\n  }\n  return false;\n}\n\n// --- Pruebas ---\nconst head1 = new Node(1);\nhead1.next = new Node(2);\nhead1.next.next = new Node(3);\nhead1.next.next.next = new Node(4);\nhead1.next.next.next.next = new Node(5);\nhead1.next.next.next.next.next = head1.next.next; // Crear ciclo\n\nconsole.log("Lista 1 tiene ciclo:", hasCycle(head1)); // Salida esperada: true\n\nconst head2 = new Node(1);\nhead2.next = new Node(2);\nhead2.next.next = new Node(3);\n\nconsole.log("Lista 2 tiene ciclo:", hasCycle(head2)); // Salida esperada: false`,
                'merge-intervals-1': `/*\n  Dados una colección de intervalos, fusiona todos los intervalos superpuestos.\n*/\n\nclass Interval {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n  }\n  \n  toString() {\n    return \`[\${this.start}, \${this.end}]\`;\n  }\n}\n\nfunction merge(intervals) {\n  if (intervals.length < 2) {\n    return intervals;\n  }\n\n  // Ordenar los intervalos por el inicio\n  intervals.sort((a, b) => a.start - b.start);\n\n  const mergedIntervals = [];\n  let start = intervals[0].start;\n  let end = intervals[0].end;\n\n  for (let i = 1; i < intervals.length; i++) {\n    const interval = intervals[i];\n    if (interval.start <= end) { // Hay superposición\n      end = Math.max(end, interval.end);\n    } else { // No hay superposición\n      mergedIntervals.push(new Interval(start, end));\n      start = interval.start;\n      end = interval.end;\n    }\n  }\n\n  // Añadir el último intervalo\n  mergedIntervals.push(new Interval(start, end));\n  return mergedIntervals;\n}\n\n// --- Pruebas ---\nlet result = merge([\n  new Interval(1, 4),\n  new Interval(2, 5),\n  new Interval(7, 9)\n]);\nconsole.log("Intervalos fusionados: " + result.map(i => i.toString()).join(', '));\n// Salida esperada: [1, 5], [7, 9]\n\nresult = merge([\n  new Interval(6, 7),\n  new Interval(2, 4),\n  new Interval(5, 9)\n]);\nconsole.log("Intervalos fusionados: " + result.map(i => i.toString()).join(', '));\n// Salida esperada: [2, 4], [5, 9]`,
                'bfs-1': `/*\n  Dado un árbol binario, devuelve un recorrido por niveles de los valores de sus nodos.\n*/\n\n// Definición de la clase para el nodo del árbol\nclass TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction traverse(root) {\n  if (!root) {\n    return [];\n  }\n\n  const result = [];\n  const queue = [root];\n\n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      let currentNode = queue.shift();\n      currentLevel.push(currentNode.val);\n      if (currentNode.left) {\n        queue.push(currentNode.left);\n      }\n      if (currentNode.right) {\n        queue.push(currentNode.right);\n      }\n    }\n    result.push(currentLevel);\n  }\n  return result;\n}\n\n// --- Pruebas ---\nconst root = new TreeNode(12);\nroot.left = new TreeNode(7);\nroot.right = new TreeNode(1);\nroot.left.left = new TreeNode(9);\nroot.right.left = new TreeNode(10);\nroot.right.right = new TreeNode(5);\n\nconsole.log("Recorrido por niveles:", JSON.stringify(traverse(root)));\n// Salida esperada: [[12],[7,1],[9,10,5]]`,
                'dfs-1': `/*\n  Dado un árbol binario, realiza un recorrido en pre-orden (Raíz, Izquierda, Derecha).\n*/\n\n// Definición de la clase para el nodo del árbol\nclass TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction traversePreOrder(root) {\n  const result = [];\n  \n  function dfs(node) {\n    if (!node) {\n      return;\n    }\n    // Visita el nodo actual (raíz del sub-árbol)\n    result.push(node.val);\n    // Recorre el sub-árbol izquierdo\n    dfs(node.left);\n    // Recorre el sub-árbol derecho\n    dfs(node.right);\n  }\n\n  dfs(root);\n  return result;\n}\n\n// --- Pruebas ---\nconst root = new TreeNode(12);\nroot.left = new TreeNode(7);\nroot.right = new TreeNode(1);\nroot.left.left = new TreeNode(9);\nroot.right.left = new TreeNode(10);\nroot.right.right = new TreeNode(5);\n\nconsole.log("Recorrido DFS (Pre-orden):", traversePreOrder(root).join(', '));\n// Salida esperada: 12, 7, 9, 1, 10, 5`
            };

            const navStructure = [ { title: 'Bienvenida', id: 'welcome', icon: 'home' }, { title: 'Parte I: La Fundación', icon: 'gem', children: [ { title: '1. El Proceso de Aprendizaje', id: 'part1-sec1' }, { title: '2. Estructuras de Datos', id: 'part1-sec2' }, { title: '3. Algoritmos Fundamentales', id: 'part1-sec3' }, ] }, { title: 'Parte II: La Aplicación', icon: 'puzzle', children: [ { title: '4. Patrones de "Grokking"', id: 'part2-sec4' }, { title: '5. Temas Avanzados', id: 'part2-sec5' }, ] }, { title: 'Parte III: El Arquitecto', icon: 'network', children: [ { title: '6. Fundamentos de Sist. Diseño', id: 'part3-sec6' }, { title: '7. Manual de Sist. Diseño', id: 'part3-sec7' }, ] }, { title: 'Parte IV: El Elemento Humano', icon: 'users', children: [ { title: '8. Entrevistas de Comportamiento', id: 'part4-sec8' }, { title: '9. El Metajuego del Proceso', id: 'part4-sec9' }, ] } ];

            // --- LOGIC ---
            const navLinksContainer = document.getElementById('nav-links');
            const contentArea = document.getElementById('content');
            const contentTitle = document.getElementById('content-title');
            const menuToggle = document.getElementById('menu-toggle');
            const sidebar = document.getElementById('sidebar');
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            const modalClose = document.getElementById('modal-close');
            const summarizeBtn = document.getElementById('summarize-btn');
            
            let editors = {};
            let currentSectionId = 'welcome';

            // --- Gemini API Call (Deactivated) ---
            async function callGemini(prompt) {
                console.error("Gemini API call is deactivated. An API key is required.");
                return `Error: La llamada a la API de Gemini está desactivada. Se requiere una clave de API.`;
                // const apiKey = ""; // Leave empty, handled by the environment
                // const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                
                // const payload = {
                //     contents: [{ role: "user", parts: [{ text: prompt }] }]
                // };

                // try {
                //     const response = await fetch(apiUrl, {
                //         method: 'POST',
                //         headers: { 'Content-Type': 'application/json' },
                //         body: JSON.stringify(payload)
                //     });

                //     if (!response.ok) {
                //         throw new Error(`API request failed with status ${response.status}`);
                //     }

                //     const result = await response.json();
                //     if (result.candidates && result.candidates.length > 0) {
                //         return result.candidates[0].content.parts[0].text;
                //     }
                //     throw new Error("Invalid response from API");
                // } catch (error) {
                //     console.error("Gemini API call failed:", error);
                //     return `Error al contactar la IA: ${error.message}`;
                // }
            }

            function showModal(title, content) {
                modalBody.innerHTML = `<h2>${title}</h2><div class="mt-4">${content}</div>`;
                modal.classList.add('visible');
            }

            function hideModal() {
                modal.classList.remove('visible');
            }

            modalClose.addEventListener('click', hideModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    hideModal();
                }
            });

            function setButtonLoading(button, isLoading) {
                if (!button) return;
                if (isLoading) {
                    button.disabled = true;
                    button.innerHTML = `<span class="loader"></span>`;
                } else {
                    button.disabled = false;
                    // Restore original content based on class
                    if (button.classList.contains('explain-btn')) {
                        button.innerHTML = '✨ Explicación con IA';
                    } else if (button.classList.contains('testcase-btn')) {
                        button.innerHTML = '✨ Generar Caso de Prueba';
                    } else if (button.id === 'summarize-btn') {
                        button.innerHTML = '✨ Resumir Sección';
                    }
                }
            }

            async function handleExplainCode(id) {
                const button = document.querySelector(`.code-container[data-id="${id}"] .explain-btn`);
                setButtonLoading(button, true);
                const code = editors[id].getValue();
                const prompt = `Eres un experto programador y profesor. Explica el siguiente código JavaScript en español, paso a paso. Detalla la lógica, el propósito de las variables clave y concluye con el análisis de complejidad temporal y espacial. Formatea tu respuesta en Markdown.\n\n\`\`\`javascript\n${code}\n\`\`\``;
                const explanation = await callGemini(prompt);
                showModal('Explicación del Código', window.marked.parse(explanation));
                setButtonLoading(button, false);
            }

            async function handleGenerateTest(id) {
                const button = document.querySelector(`.code-container[data-id="${id}"] .testcase-btn`);
                setButtonLoading(button, true);
                const code = editors[id].getValue();
                const prompt = `Dado el siguiente código JavaScript, genera un nuevo y único caso de prueba (un edge case o un caso más complejo) para la función principal. Devuelve solo el código del nuevo 'console.log()' sin explicaciones adicionales, listo para ser añadido al script.\n\n\`\`\`javascript\n${code}\n\`\`\``;
                const newTest = await callGemini(prompt);
                const currentCode = editors[id].getValue();
                editors[id].setValue(currentCode + '\\n\\n// --- Nuevo Caso de Prueba (IA) ---\\n' + newTest);
                setButtonLoading(button, false);
            }

            async function handleSummarizeSection() {
                setButtonLoading(summarizeBtn, true);
                const rawContent = contentData[currentSectionId];
                const textContent = new DOMParser().parseFromString(rawContent, "text/html").documentElement.textContent;
                const prompt = `Eres un asistente de estudio. Resume los conceptos clave del siguiente texto en español, usando viñetas (bullet points) para mayor claridad. La respuesta debe ser concisa y directa. Formatea tu respuesta en Markdown.\\n\\nTexto:\\n${textContent}`;
                const summary = await callGemini(prompt);
                showModal('Resumen de la Sección', window.marked.parse(summary));
                setButtonLoading(summarizeBtn, false);
            }

            summarizeBtn.addEventListener('click', handleSummarizeSection);
            // Deactivate AI buttons
            summarizeBtn.disabled = true;

            function generateNav() {
                let navHtml = '';
                navStructure.forEach(item => {
                    if (item.children) {
                        navHtml += `<div class="py-2"><h3 class="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider flex items-center"><i data-lucide="${item.icon}" class="w-4 h-4 mr-2"></i>${item.title}</h3><div class="mt-1 space-y-1">`;
                        item.children.forEach(child => {
                            navHtml += `<a href="#" class="sidebar-link group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white" data-section="${child.id}">${child.title}</a>`;
                        });
                        navHtml += `</div></div>`;
                    } else {
                         navHtml += `<a href="#" class="sidebar-link group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white" data-section="${item.id}"><i data-lucide="${item.icon}" class="w-5 h-5 mr-3"></i>${item.title}</a>`;
                    }
                });
                navLinksContainer.innerHTML = navHtml;
                window.lucide.createIcons();
            }

            function initializeCodeEditors() {
                const containers = contentArea.querySelectorAll('.code-container');
                containers.forEach(container => {
                    const id = container.dataset.id;
                    if (!codeExamples[id]) return;
                    
                    container.innerHTML = `
                        <textarea id="editor-${id}"></textarea>
                        <div class="flex items-center justify-between bg-gray-800 p-2 rounded-b-md -mt-2">
                            <div>
                                <button class="explain-btn gemini-btn" disabled>✨ Explicación con IA</button>
                                <button class="testcase-btn gemini-btn ml-2" disabled>✨ Generar Caso de Prueba</button>
                            </div>
                            <div>
                                <button class="reset-btn text-sm py-1 px-3 rounded-md bg-gray-600 hover:bg-gray-500 mr-2">Reiniciar</button>
                                <button class="run-btn text-sm py-1 px-3 rounded-md bg-blue-600 hover:bg-blue-500 flex items-center">
                                    <i data-lucide="play" class="w-4 h-4 mr-1"></i>Ejecutar
                                </button>
                            </div>
                        </div>
                        <div id="output-${id}" class="code-output"></div>
                    `;

                    const editor = window.CodeMirror.fromTextArea(document.getElementById(`editor-${id}`), {
                        lineNumbers: true, mode: 'javascript', theme: 'material-darker', value: codeExamples[id]
                    });
                    editor.setValue(codeExamples[id]);
                    editors[id] = editor;

                    container.querySelector('.run-btn').addEventListener('click', () => executeCode(id));
                    container.querySelector('.reset-btn').addEventListener('click', () => editors[id].setValue(codeExamples[id]));
                    // container.querySelector('.explain-btn').addEventListener('click', () => handleExplainCode(id));
                    // container.querySelector('.testcase-btn').addEventListener('click', () => handleGenerateTest(id));
                });
                window.lucide.createIcons();
            }

            function executeCode(id) {
                const code = editors[id].getValue();
                const outputElement = document.getElementById(`output-${id}`);
                outputElement.innerHTML = '';
                outputElement.classList.remove('error');
                
                let capturedLogs = [];
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
                    outputElement.textContent = capturedLogs.join('\\n');
                } catch (e) {
                    outputElement.textContent = e.stack;
                    outputElement.classList.add('error');
                } finally {
                    console.log = originalLog;
                }
            }

            function loadContent(sectionId) {
                currentSectionId = sectionId;
                const activeLink = navLinksContainer.querySelector(`[data-section="${sectionId}"]`);
                contentArea.innerHTML = contentData[sectionId] || '<p>Contenido no encontrado.</p>';
                contentTitle.textContent = activeLink ? activeLink.textContent : 'Bienvenido';
                
                document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                if(activeLink) activeLink.classList.add('active');

                initializeCodeEditors();
                document.getElementById('content-area').scrollTop = 0;
            }

            navLinksContainer.addEventListener('click', (e) => {
                e.preventDefault();
                const link = e.target.closest('.sidebar-link');
                if (link) {
                    loadContent(link.dataset.section);
                    if (window.innerWidth < 768) sidebar.classList.remove('open');
                }
            });

            menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
            document.addEventListener('click', (e) => {
                if (window.innerWidth < 768 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            });
            
            generateNav();
            loadContent('welcome');

        };
        init();
    }, []);

    return (
        <>
            <Head>
                <title>Guía de Entrevistas Potenciada por Gemini</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/material-darker.min.css" />
            </Head>
            <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js" strategy="lazyOnload" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/javascript/javascript.min.js" strategy="lazyOnload" />
            <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" strategy="lazyOnload" />
            
            <style jsx global>{`
                body { background-color: #111827; color: #e5e7eb; }
                .content h1 { font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; border-bottom: 2px solid #374151; padding-bottom: 0.5rem; }
                .content h2 { font-size: 1.875rem; line-height: 2.25rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid #374151; padding-bottom: 0.5rem; }
                .content h3 { font-size: 1.5rem; line-height: 2rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.75rem; }
                .content h4 { font-size: 1.25rem; line-height: 1.75rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; }
                .content p { margin-bottom: 1rem; line-height: 1.75; color: #d1d5db; }
                .content ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem; }
                .content li { margin-bottom: 0.5rem; }
                .content code:not(.cm-s-material-darker code) { background-color: #374151; color: #f3f4f6; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-size: 0.9em; }
                .sidebar-link.active { background-color: #374151; color: #f9fafb; font-weight: 600; }
                #sidebar { transition: transform 0.3s ease-in-out; }
                @media (max-width: 768px) { #sidebar { transform: translateX(-100%); position: fixed; z-index: 40; height: 100%; } #sidebar.open { transform: translateX(0); } }
                .CodeMirror { border: 1px solid #374151; border-radius: 0.5rem; height: auto; font-size: 0.9rem; }
                .code-output { background-color: #111827; border: 1px solid #374151; border-top: none; border-radius: 0 0 0.5rem 0.5rem; padding: 0.75rem; min-height: 50px; font-family: monospace; white-space: pre-wrap; margin-top: -1px; }
                .code-output.error { color: #fca5a5; }
                .modal-backdrop {
                    position: fixed; inset: 0; background-color: rgba(0,0,0,0.7);
                    display: flex; align-items: center; justify-content: center;
                    z-index: 50; opacity: 0; transition: opacity 0.3s; pointer-events: none;
                }
                .modal-backdrop.visible { opacity: 1; pointer-events: auto; }
                .modal-content {
                    background-color: #1f2937; color: #d1d5db; border-radius: 0.5rem;
                    width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto;
                    padding: 1.5rem; transform: scale(0.95); transition: transform 0.3s;
                }
                .modal-backdrop.visible .modal-content { transform: scale(1); }
                .modal-content h2 { margin-top: 0; }
                .modal-content p { margin-bottom: 1rem; }
                .modal-content ul { list-style-position: inside; }
                .modal-content strong { color: #f9fafb; }
                .gemini-btn {
                    background-color: #4338ca; color: white;
                    padding: 0.25rem 0.75rem; border-radius: 0.375rem;
                    font-size: 0.875rem; line-height: 1.25rem;
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    transition: background-color 0.2s;
                }
                .gemini-btn:hover { background-color: #4f46e5; }
                .gemini-btn:disabled { background-color: #4b5563; cursor: not-allowed; }
                .loader {
                    width: 16px; height: 16px; border: 2px solid #fff;
                    border-bottom-color: transparent; border-radius: 50%;
                    display: inline-block; box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }
                @keyframes rotation { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            `}</style>
            
            <div id="modal" className="modal-backdrop">
                <div className="modal-content">
                    <div id="modal-body"></div>
                    <button id="modal-close" className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-md">Cerrar</button>
                </div>
            </div>

            <div className="flex h-screen">
                <aside id="sidebar" className="w-72 bg-gray-800 text-gray-300 flex-shrink-0 overflow-y-auto">
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-white mb-4">Menú Interactivo</h2>
                        <nav id="nav-links" className="space-y-1"></nav>
                    </div>
                </aside>

                <main className="flex-1 flex flex-col overflow-hidden">
                    <header className="bg-gray-800 shadow-md p-4 flex items-center justify-between">
                        <button id="menu-toggle" className="md:hidden p-2 rounded-md hover:bg-gray-700"><i data-lucide="menu"></i></button>
                        <h1 id="content-title" className="text-xl font-semibold text-white">Bienvenido</h1>
                        <button id="summarize-btn" className="gemini-btn">
                            ✨ Resumir Sección
                        </button>
                    </header>
                    
                    <div id="content-area" className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
                        <div id="content" className="max-w-4xl mx-auto"></div>
                    </div>
                </main>
            </div>
        </>
    );
}

// Add this to avoid issues with window not being defined on server
declare global {
  interface Window {
    lucide: any;
    marked: any;
    CodeMirror: any;
  }
}
