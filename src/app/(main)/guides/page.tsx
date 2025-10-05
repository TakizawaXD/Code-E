
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
    'part1-sec1': `<h2>Sección 1: Dominando el Proceso de Aprendizaje</h2>
        <p>El enfoque moderno para la preparación de entrevistas técnicas ha experimentado una transformación fundamental, alejándose de la memorización de soluciones específicas hacia el desarrollo de una comprensión profunda de los patrones de resolución de problemas subyacentes. Este método, conocido como "Grokking", se centra en identificar categorías de problemas recurrentes y dominar las técnicas algorítmicas para abordarlos. La clave no es saber la solución a 100 problemas, sino reconocer que muchos de esos 100 problemas son variaciones de 10 patrones fundamentales.</p>
        
        <h3>Estrategias de Aprendizaje Activo</h3>
        <ul>
            <li><strong>Práctica Deliberada:</strong> No se trata solo de resolver muchos problemas, sino de enfocarse en áreas de debilidad. Si tienes dificultades con los grafos, dedica una semana entera a problemas de grafos, desde los más fáciles hasta los más difíciles.</li>
            <li><strong>Técnica Feynman:</strong> Después de aprender un nuevo patrón o algoritmo, intenta explicarlo en términos simples, como si se lo estuvieras enseñando a un niño. Si no puedes hacerlo, no lo has entendido lo suficiente. Escribir un post en un blog o explicárselo a un amigo son excelentes maneras de aplicar esta técnica.</li>
            <li><strong>Repetición Espaciada:</strong> Utiliza herramientas como Anki o un simple calendario para volver a visitar problemas que ya has resuelto. La repetición espaciada en intervalos crecientes (1 día, 3 días, 1 semana, 1 mes) es extremadamente efectiva para la retención a largo plazo.</li>
            <li><strong>Resolución cronometrada:</strong> Simula las condiciones de una entrevista real. Date 45 minutos para resolver un problema de principio a fin, incluyendo la explicación de tu enfoque y la codificación de la solución.</li>
        </ul>
        
        <div class="mt-6 mb-6 p-4 bg-secondary border border-border rounded-lg">
            <h4 class="font-semibold text-foreground">El Ciclo de Aprendizaje Efectivo</h4>
            <p class="text-muted-foreground mt-2">
                <strong>1. Intentar:</strong> Intenta resolver el problema por tu cuenta durante al menos 20-30 minutos.<br>
                <strong>2. Desbloquear:</strong> Si estás atascado, busca una pista, no la solución completa. ¿Qué patrón podría aplicarse aquí?<br>
                <strong>3. Entender:</strong> Si necesitas ver la solución, no te limites a copiarla. Entiéndela línea por línea. ¿Por qué funciona? ¿Cuáles son los casos límite?<br>
                <strong>4. Implementar:</strong> Cierra la solución y trata de implementarla tú mismo desde cero.<br>
                <strong>5. Revisar:</strong> Compara tu código con la solución óptima. ¿Hay algo que podrías haber hecho mejor? ¿Y la complejidad espacial y temporal?<br>
                <strong>6. Repetir:</strong> Añade este problema a tu lista de repetición espaciada para volver a visitarlo en el futuro.
            </p>
        </div>`,
    'part1-sec2': `<h2>Sección 2: Los Pilares - Estructuras de Datos Fundamentales</h2>
        <p>El dominio de las estructuras de datos es el requisito previo indispensable para la resolución de problemas algorítmicos. Son las herramientas fundamentales con las que un ingeniero organiza y manipula la información. No basta con saber qué son; debes entender sus complejidades de tiempo y espacio para cada operación, y cuándo es apropiado usar cada una.</p>

        <h3>Estructuras Lineales</h3>
        <ul>
            <li><strong>Arrays (Arreglos):</strong> Colecciones contiguas en memoria. Acceso O(1) por índice. Inserción/eliminación al final es O(1) (amortizado), pero en medio o al principio es O(n). Ideal para acceso rápido y si el tamaño es fijo.</li>
            <li><strong>Linked Lists (Listas Enlazadas):</strong> Nodos conectados por punteros. Inserción/eliminación al principio es O(1), en el medio o final es O(n) si no se tiene una referencia. No hay acceso O(1). Útil para estructuras que cambian de tamaño frecuentemente (como una cola).</li>
        </ul>

        <h3>Estructuras No Lineales</h3>
        <ul>
            <li><strong>Hash Tables (Tablas de Hash):</strong> Mapeo de claves a valores. Inserción, búsqueda y eliminación en tiempo promedio O(1). Son la base para resolver incontables problemas de entrevistas. Entender cómo manejar colisiones (chaining, open addressing) es un plus.</li>
            <li><strong>Trees (Árboles):</strong> Estructuras jerárquicas. Imprescindible conocer los Árboles Binarios de Búsqueda (BST), donde inserción, búsqueda y eliminación son O(log n) en promedio. Entender los recorridos (In-order, Pre-order, Post-order, Level-order/BFS) es fundamental.</li>
            <li><strong>Heaps (Montículos):</strong> Un árbol especializado (generalmente binario) que satisface la propiedad del montículo (en un Min-Heap, el padre siempre es más pequeño que sus hijos). Permiten encontrar/extraer el mínimo/máximo en O(1) / O(log n) e insertar en O(log n). Son la estructura de datos detrás de las Colas de Prioridad.</li>
            <li><strong>Graphs (Grafos):</strong> Nodos (vértices) conectados por aristas. Pueden ser dirigidos o no dirigidos, ponderados o no. Son esenciales para modelar redes, mapas, etc. Debes saber cómo representarlos (Lista de Adyacencia vs. Matriz de Adyacencia).</li>
            <li><strong>Tries (Árboles de Prefijos):</strong> Un tipo de árbol especializado para almacenar y buscar cadenas. Cada nodo representa un carácter. Muy eficiente para problemas de autocompletado y búsqueda de prefijos.</li>
        </ul>
        
        <div class="mt-6 mb-6 p-4 bg-secondary border border-border rounded-lg">
            <h4 class="font-semibold text-foreground">Tabla Rápida de Complejidades (Promedio)</h4>
            <table class="w-full mt-2 text-sm">
                <thead>
                    <tr class="text-left"><th>Estructura</th><th>Acceso</th><th>Búsqueda</th><th>Inserción</th><th>Eliminación</th></tr>
                </thead>
                <tbody class="text-muted-foreground">
                    <tr><td>Array</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>
                    <tr><td>Lista Enlazada</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
                    <tr><td>Hash Table</td><td>-</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
                    <tr><td>BST</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td></tr>
                    <tr><td>Heap</td><td>-</td><td>-</td><td>O(log n)</td><td>O(log n)</td></tr>
                </tbody>
            </table>
        </div>`,
    'part1-sec3': `<h2>Sección 3: El Conjunto de Herramientas - Algoritmos Fundamentales</h2>
        <p>Los algoritmos son los procedimientos paso a paso que operan sobre las estructuras de datos para resolver problemas. Una sólida comprensión de estos algoritmos fundamentales es esencial para construir soluciones eficientes. No se trata de memorizar código, sino de entender la lógica y el proceso.</p>

        <h3>Algoritmos de Búsqueda y Ordenamiento</h3>
        <ul>
            <li><strong>Binary Search (Búsqueda Binaria):</strong> Un algoritmo increíblemente eficiente (O(log n)) para encontrar un elemento en un <strong>array ordenado</strong>. La idea central es dividir repetidamente el espacio de búsqueda por la mitad.</li>
            <li><strong>Sorting Algorithms (Algoritmos de Ordenamiento):</strong> Debes conocer los más comunes, sus complejidades y casos de uso.
                <ul>
                    <li><strong>Merge Sort:</strong> Divide y vencerás. Estable, O(n log n) en todos los casos. Requiere espacio extra O(n).</li>
                    <li><strong>Quick Sort:</strong> Divide y vencerás. O(n log n) en promedio, pero O(n²) en el peor caso. Generalmente más rápido en la práctica que Merge Sort due a un menor uso de memoria.</li>
                    <li><strong>Heap Sort:</strong> Usa un Heap para ordenar. O(n log n) en todos los casos. Ordena in-place (no requiere memoria extra significativa).</li>
                </ul>
            </li>
        </ul>

        <h3>Algoritmos de Grafos</h3>
        <ul>
            <li><strong>Breadth-First Search (BFS - Búsqueda en Amplitud):</strong> Explora los vecinos de un nodo antes de moverse a los vecinos de los vecinos. Usa una <strong>cola</strong>. Es ideal para encontrar el camino más corto en grafos no ponderados.</li>
            <li><strong>Depth-First Search (DFS - Búsqueda en Profundidad):</strong> Explora tan profundo como sea posible por una rama antes de retroceder. Usa <strong>recursión</strong> (la pila de llamadas) o una pila explícita. Útil para problemas de conectividad, topología y ciclos.</li>
            <li><strong>Dijkstra's Algorithm:</strong> Encuentra el camino más corto desde un nodo de origen a todos los demás nodos en un grafo <strong>ponderado (con pesos no negativos)</strong>. Utiliza una cola de prioridad (Min-Heap).</li>
        </ul>

        <h3>Otros Paradigmas Importantes</h3>
        <ul>
            <li><strong>Recursión:</strong> La capacidad de una función para llamarse a sí misma. Es una herramienta poderosa para problemas que pueden ser descompuestos en subproblemas idénticos, como recorridos de árboles o backtracking.</li>
            <li><strong>Programación Dinámica (DP):</strong> Romper un problema en subproblemas superpuestos y resolver cada subproblema solo una vez, almacenando sus soluciones. Esencial para problemas de optimización. Identifica el estado y la transición.</li>
            <li><strong>Backtracking:</strong> Construye una solución candidata de forma incremental y la abandona ("backtrack") tan pronto como determina que no puede conducir a una solución válida. Se usa en problemas como N-Queens, Sudoku, y generación de combinaciones/permutaciones.</li>
        </ul>`,
    'part2-sec4': `<h2>Sección 4: Deconstruyendo Problemas: Los Patrones "Grokking"</h2>
        <p>Esta es la sección más importante de la guía. En lugar de ver cada problema como algo único, aprenderás a identificar patrones subyacentes que se repiten en una amplia variedad de preguntas de entrevista. Dominar estos patrones te dará un "superpoder" para enfrentarte a problemas que nunca has visto antes.</p>
        
        <h3>4.1 Ventana Deslizante (Sliding Window)</h3>
        <p>Este patrón se utiliza para realizar una operación en una subsección contigua de un array o cadena. La ventana se desliza sobre los datos, un elemento a la vez, y se ajusta según ciertas condiciones. Reduce la complejidad de algoritmos de fuerza bruta O(n*k) a un eficiente O(n).</p>
        <h4>Ejemplo: Máxima Suma de Subarray de Tamaño K</h4>
        <div class="code-container" data-id="sliding-window-1"></div>

        <h3>4.2 Dos Punteros (Two Pointers)</h3>
        <p>Utiliza dos punteros que se mueven a través de una estructura de datos (generalmente un array ordenado) para encontrar un conjunto de elementos que cumplen ciertos criterios. Los punteros pueden moverse en direcciones opuestas (desde los extremos hacia el centro) o en la misma dirección (uno rápido y otro lento).</p>
        <h4>Ejemplo: Par con Suma Objetivo</h4>
        <div class="code-container" data-id="two-pointers-1"></div>

        <h3>4.3 Punteros Rápidos y Lentos (Fast & Slow Pointers)</h3>
        <p>También conocido como el algoritmo de la liebre y la tortuga, este patrón utiliza dos punteros que se mueven a diferentes velocidades a través de una secuencia (típicamente una lista enlazada). Es extremadamente útil para detectar ciclos, encontrar el punto medio de una lista o resolver problemas relacionados con secuencias infinitas.</p>
        <h4>Ejemplo: Detección de Ciclo en Lista Enlazada</h4>
        <div class="code-container" data-id="fast-slow-1"></div>
        
        <h3>4.4 Fusión de Intervalos (Merge Intervals)</h3>
        <p>Este patrón se ocupa de problemas que involucran intervalos superpuestos. La estrategia general es ordenar los intervalos por su punto de inicio y luego iterar, fusionando aquellos que se solapan. Es común en problemas de calendario, asignación de recursos y geometría computacional.</p>
        <h4>Ejemplo: Fusionar Intervalos</h4>
        <div class="code-container" data-id="merge-intervals-1"></div>
        
        <h3>4.5 Búsqueda en Amplitud (BFS)</h3>
        <p>Un patrón fundamental para recorrer árboles o grafos nivel por nivel. Utiliza una cola para mantener un registro de los nodos a visitar. Es la elección perfecta para encontrar el camino más corto en un grafo no ponderado, o para cualquier problema que requiera explorar un grafo de la manera más "ancha" posible.</p>
        <h4>Ejemplo: Recorrido de Árbol por Nivel</h4>
        <div class="code-container" data-id="bfs-1"></div>

        <h3>4.6 Búsqueda en Profundidad (DFS)</h3>
        <p>Este patrón explora tan profundamente como sea posible a lo largo de cada rama antes de retroceder (backtracking). Se implementa comúnmente con recursión o una pila explícita. Es ideal para problemas de búsqueda de caminos (no necesariamente el más corto), topología, y para verificar la conectividad de un grafo.</p>
        <h4>Ejemplo: Recorrido de Árbol Pre-orden</h4>
        <div class="code-container" data-id="dfs-1"></div>
        `,
    'part2-sec5': `<h2>Sección 5: Dominios de Conocimiento Especializados y Avanzados</h2>
        <p>Para destacar en entrevistas en empresas de primer nivel o para roles de mayor antigüedad, el dominio de los patrones fundamentales debe complementarse con conocimientos en áreas más especializadas. Estos temas demuestran una profundidad de conocimiento y una capacidad para abordar problemas más complejos y específicos.</p>

        <h3>Operaciones a Nivel de Bits (Bit Manipulation)</h3>
        <p>Comprender cómo manipular los bits individuales de un número puede llevar a soluciones increíblemente eficientes para ciertos problemas. Son comunes en sistemas de bajo nivel, pero también aparecen en entrevistas para probar un conocimiento más profundo de la computación.</p>
        <ul>
            <li><strong>Operadores Clave:</strong> Debes dominar <code>AND (&)</code>, <code>OR (|)</code>, <code>XOR (^)</code>, <code>NOT (~)</code>, y los desplazamientos de bits <code><<</code> (shift left) y <code>>></code> (shift right).</li>
            <li><strong>Casos de Uso Comunes:</strong> Comprobar si un número es par o impar (<code>x & 1</code>), encontrar el único número no repetido en un array (usando XOR), manejar conjuntos de permisos (usando máscaras de bits).</li>
        </ul>

        <h3>Topological Sort (Ordenamiento Topológico)</h3>
        <p>Este algoritmo se aplica a <strong>Grafos Acíclicos Dirigidos (DAGs)</strong>. Produce una ordenación lineal de sus vértices tal que para cada arista dirigida de u a v, el vértice u aparece antes que v en la ordenación. Es fundamental para resolver problemas de dependencias.</p>
        <ul>
            <li><strong>Ejemplos:</strong> Secuenciación de tareas (la tarea A debe completarse antes que la B), resolución de dependencias en un gestor de paquetes, orden de compilación de archivos de código.</li>
            <li><strong>Implementación:</strong> Generalmente se implementa usando el algoritmo de Kahn (basado en BFS y grados de entrada) o mediante DFS.</li>
        </ul>

        <h3>Estructuras de Datos Avanzadas</h3>
        <ul>
            <li><strong>Union-Find (o Disjoint Set Union - DSU):</strong> Una estructura de datos que realiza un seguimiento de un conjunto de elementos particionados en una serie de subconjuntos disjuntos (no superpuestos). Tiene dos operaciones principales: <code>find</code> (determina a qué subconjunto pertenece un elemento) y <code>union</code> (une dos subconjuntos en uno solo). Extremadamente útil para problemas de conectividad en grafos y detección de ciclos en grafos no dirigidos de forma muy eficiente.</li>
            <li><strong>Segment Tree / Fenwick Tree (Binary Indexed Tree):</strong> Estructuras de datos para manejar eficientemente consultas de rango en un array (por ejemplo, "dame la suma de los elementos del índice i al j"). Permiten actualizaciones y consultas en tiempo O(log n), lo cual es mucho mejor que el O(n) de un enfoque ingenuo.</li>
        </ul>`,
    'part3-sec6': `<h2>Sección 6: Fundamentos del Diseño de Sistemas</h2>
        <p>Esta habilidad es un requisito fundamental para ingenieros de nivel medio y superior, ya que evalúa la capacidad de pensar en términos de arquitectura, escalabilidad y fiabilidad. A diferencia de las entrevistas de algoritmos, no hay una "respuesta correcta" única. Se trata de un diálogo técnico donde exploras trade-offs y justificas tus decisiones de diseño.</p>
        
        <h3>Conceptos Clave</h3>
        <ul>
            <li><strong>Escalabilidad Vertical vs. Horizontal:</strong> Escalar verticalmente (Scaling Up) significa aumentar los recursos de una sola máquina (más CPU, RAM). Escalar horizontalmente (Scaling Out) significa añadir más máquinas al sistema. La escalabilidad horizontal es la clave para los sistemas a gran escala.</li>
            <li><strong>Balanceadores de Carga (Load Balancers):</strong> Distribuyen el tráfico de red entrante entre múltiples servidores backend. Son esenciales para la escalabilidad horizontal y la alta disponibilidad. Debes conocer algoritmos como Round Robin, Least Connections y basados en latencia.</li>
            <li><strong>Bases de Datos: SQL vs. NoSQL:</strong>
                <ul>
                    <li><strong>SQL (Relacionales):</strong> Ofrecen consistencia (ACID). Son ideales para datos estructurados con relaciones complejas. Ej: PostgreSQL, MySQL.</li>
                    <li><strong>NoSQL:</strong> Ofrecen alta escalabilidad y flexibilidad. Se dividen en varias categorías (clave-valor, documentales, columnares, de grafos). Generalmente priorizan la disponibilidad sobre la consistencia (Teorema CAP). Ej: Cassandra, DynamoDB, MongoDB, Neo4j.</li>
                </ul>
            </li>
            <li><strong>Caching (Almacenamiento en Caché):</strong> Es una de las técnicas más importantes para mejorar el rendimiento. Se utiliza para almacenar temporalmente datos a los que se accede con frecuencia. Conoce las estrategias de caché (Cache-Aside, Read-Through, Write-Through, Write-Back) y dónde aplicarlas (CDN, caché de base de datos como Redis/Memcached, caché de aplicación).</li>
            <li><strong>Consistencia de Datos:</strong> Entiende los diferentes modelos, desde la consistencia fuerte hasta la consistencia eventual. ¿Cuándo es aceptable que un dato esté desactualizado por unos milisegundos y cuándo no?</li>
            <li><strong>Patrones de Comunicación:</strong> ¿Cuándo usar una API RESTful síncrona? ¿Cuándo es mejor usar un sistema de mensajería asíncrona (como RabbitMQ o Kafka) para desacoplar servicios?</li>
        </ul>

        <div class="mt-6 mb-6 p-4 bg-secondary border border-border rounded-lg">
            <h4 class="font-semibold text-foreground">El Teorema CAP</h4>
            <p class="text-muted-foreground mt-2">En un sistema distribuido, solo puedes tener dos de las siguientes tres garantías: <strong>Consistencia</strong> (Consistency), <strong>Disponibilidad</strong> (Availability) y <strong>Tolerancia a Particiones</strong> (Partition Tolerance). Como las particiones de red son una realidad inevitable, la elección real suele ser entre consistencia y disponibilidad. Esto es fundamental en el diseño de sistemas distribuidos.</p>
        </div>`,
    'part3-sec7': `<h2>Sección 7: El Manual de Juego de la Entrevista de Diseño de Sistemas</h2>
        <p>Una entrevista de diseño de sistemas es una simulación de una reunión de planificación técnica. El proceso y la comunicación son tan importantes, si no más, que el resultado final. Sigue un enfoque estructurado para guiar la conversación.</p>

        <h3>Un Framework de 4 Pasos</h3>
        <ol class="list-decimal list-inside space-y-4">
            <li>
                <strong>Paso 1: Entender el Problema y Establecer el Alcance (5-10 min)</strong>
                <ul class="list-disc list-inside ml-4 mt-2 text-muted-foreground">
                    <li><strong>Clarificar requisitos:</strong> No asumas nada. Pregunta. ¿Cuáles son las características clave (MVP)? ¿Quiénes son los usuarios?</li>
                    <li><strong>Estimar la escala:</strong> ¿Cuántos usuarios activos diarios (DAU)? ¿Cuántas peticiones por segundo (QPS) esperamos? ¿Cuántos datos vamos a almacenar? Esto guiará todas tus decisiones posteriores (ej. "1 millón de DAU, cada uno lee 100 tweets al día -> 100M lecturas/día ~ 1200 QPS de lectura").</li>
                    <li><strong>Definir la API (opcional pero recomendado):</strong> Esboza las principales llamadas a la API que el sistema necesitará (ej. <code>POST /tweets</code>, <code>GET /timeline</code>).</li>
                </ul>
            </li>
            <li>
                <strong>Paso 2: Diseño de Alto Nivel (10-15 min)</strong>
                <ul class="list-disc list-inside ml-4 mt-2 text-muted-foreground">
                    <li>Dibuja un diagrama simple con los componentes principales: Clientes (móvil, web), un Balanceador de Carga, tus Servicios de Aplicación y tu Base de Datos.</li>
                    <li>Explica el flujo de una petición a través de este sistema. Por ejemplo, para diseñar un acortador de URL, explica cómo funciona una escritura (<code>POST /shorten</code>) y una lectura (<code>GET /{shortUrl}</code>).</li>
                    <li>Elige tu tipo de base de datos (SQL vs. NoSQL) y justifica tu elección basándote en los requisitos de escala y consistencia.</li>
                </ul>
            </li>
            <li>
                <strong>Paso 3: Profundizar en Componentes Específicos (15-20 min)</strong>
                <ul class="list-disc list-inside ml-4 mt-2 text-muted-foreground">
                    <li>Aquí es donde el entrevistador probablemente te guiará hacia un área de interés. Si no lo hace, elige un área y profundiza.</li>
                    <li><strong>Esquema de la Base de Datos:</strong> Define las tablas o colecciones principales. Habla sobre las claves de partición y los índices para optimizar las consultas.</li>
                    <li><strong>Escalabilidad y Bottlenecks:</strong> ¿Qué pasa si tu base de datos se sobrecarga? Habla sobre réplicas de lectura (read replicas), particionamiento (sharding), y caching.</li>
                    <li><strong>Disponibilidad y Resiliencia:</strong> ¿Cómo manejas las fallas de un servidor? Habla sobre la replicación, la redundancia y el monitoreo.</li>
                </ul>
            </li>
            <li>
                <strong>Paso 4: Conclusión y Trade-offs (5 min)</strong>
                <ul class="list-disc list-inside ml-4 mt-2 text-muted-foreground">
                    <li>Resume tu diseño y discute posibles mejoras futuras o cuellos de botella no resueltos.</li>
                    <li>Menciona explícitamente los trade-offs que hiciste (ej. "Elegí consistencia eventual para el feed de noticias para lograr mayor disponibilidad y menor latencia").</li>
                    <li>Habla sobre el monitoreo, las alertas y cómo asegurarías la operatividad del sistema.</li>
                </ul>
            </li>
        </ol>`,
    'part4-sec8': `<h2>Sección 8: Dominando la Entrevista de Comportamiento</h2>
        <p>Las entrevistas de comportamiento se basan en la premisa de que el comportamiento pasado es el mejor predictor del rendimiento futuro. El objetivo del entrevistador es evaluar tus habilidades blandas (soft skills), tu encaje cultural y cómo te enfrentas a desafíos profesionales. No las subestimes; pueden ser tan importantes como las entrevistas técnicas.</p>

        <h3>El Método STAR</h3>
        <p>La forma más efectiva de responder a preguntas de comportamiento es utilizando el método STAR. Proporciona una estructura clara y concisa a tus respuestas.</p>
        <ul>
            <li><strong>S (Situación):</strong> Describe el contexto. ¿Dónde estabas trabajando? ¿Cuál era el proyecto? Sé breve y ve al grano.</li>
            <li><strong>T (Tarea):</strong> ¿Cuál era tu responsabilidad específica en esa situación? ¿Cuál era el objetivo o el problema a resolver?</li>
            <li><strong>A (Acción):</strong> Describe las acciones <strong>que tú tomaste</strong>, paso a paso. Enfócate en el "yo", no en el "nosotros". Sé detallado sobre tu proceso de pensamiento y las decisiones que tomaste.</li>
            <li><strong>R (Resultado):</strong> ¿Cuál fue el resultado de tus acciones? Cuantifícalo siempre que sea posible (ej. "Redujimos la latencia en un 30%", "Aumentamos la cobertura de pruebas del 50% al 85%"). Incluso si el resultado no fue el ideal, explica qué aprendiste de la experiencia.</li>
        </ul>

        <h3>Preguntas Comunes y Cómo Prepararte</h3>
        <p>Prepara 5-7 historias de tu experiencia que sean versátiles y puedan adaptarse a diferentes preguntas. Cada historia debe destacar una habilidad o valor diferente (liderazgo, trabajo en equipo, resolución de conflictos, manejo de errores, etc.).</p>
        <ul class="space-y-2">
            <li><strong>"Háblame de un momento en el que no estuviste de acuerdo con tu jefe o un compañero."</strong> -> Evalúa tu capacidad para manejar conflictos de manera profesional y constructiva.</li>
            <li><strong>"Describe un proyecto del que te sientas especialmente orgulloso."</strong> -> Te da la oportunidad de mostrar pasión, impacto y excelencia técnica.</li>
            <li><strong>"Cuéntame sobre un error técnico que cometiste."</strong> -> Evalúa tu humildad, tu capacidad para asumir la responsabilidad y, lo más importante, lo que aprendiste.</li>
            <li><strong>"¿Cómo manejas las prioridades cuando tienes múltiples tareas urgentes?"</strong> -> Evalúa tu organización, tu capacidad para comunicarte y tu juicio para tomar decisiones.</li>
            <li><strong>"Describe una situación ambigua en la que tuviste que tomar una decisión con información incompleta."</strong> -> Evalúa tu iniciativa, tu tolerancia a la incertidumbre y tu capacidad para tomar posesión (ownership).</li>
        </ul>
        
        <div class="mt-6 mb-6 p-4 bg-secondary border border-border rounded-lg">
            <h4 class="font-semibold text-foreground">Consejo Profesional</h4>
            <p class="text-muted-foreground mt-2">Termina siempre tus respuestas de manera positiva, enfocándote en el aprendizaje y el crecimiento. Y al final de la entrevista, ¡haz preguntas inteligentes! Preguntar sobre los desafíos del equipo, la cultura de ingeniería o cómo se mide el éxito demuestra tu interés y compromiso.</p>
        </div>`,
    'part4-sec9': `<h2>Sección 9: El Proceso de Entrevista Desmitificado (El Metajuego)</h2>
        <p>Comprender la logística y la psicología del proceso de entrevista es una ventaja estratégica. No se trata solo de ser técnicamente competente, sino de navegar el proceso de manera efectiva.</p>

        <h3>Las Etapas Típicas</h3>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>Filtro de RRHH / Reclutador:</strong> Una breve llamada para evaluar tu interés, experiencia general y encaje salarial. Sé entusiasta y alínea tu experiencia con la descripción del puesto.</li>
            <li><strong>Entrevista Técnica Telefónica / Online (Screening):</strong> Generalmente dura 45-60 minutos. Suele ser un problema de algoritmos de nivel fácil-medio. El objetivo es filtrar candidatos que no tienen las habilidades de programación básicas. Comunica tu pensamiento en voz alta.</li>
            <li><strong>El "On-site" (Virtual o Presencial):</strong> El evento principal. Suele consistir en 4-6 entrevistas de 45-60 minutos cada una, que cubren diferentes áreas.
                <ul>
                    <li><strong>Algoritmos y Estructuras de Datos (2-3 rondas):</strong> El núcleo de la evaluación técnica. Espera problemas de nivel medio-difícil.</li>
                    <li><strong>Diseño de Sistemas (1-2 rondas):</strong> Para roles de nivel medio en adelante. Evalúa tu capacidad para diseñar sistemas escalables.</li>
                    <li><strong>Entrevista de Comportamiento / Cultural Fit (1 ronda):</strong> A menudo con un Engineering Manager. Evalúa tus soft skills y si encajarías en el equipo.</li>
                    <li><strong>Especializada (opcional):</strong> Podría ser sobre un dominio específico como Frontend, Machine Learning, Mobile, etc.</li>
                </ul>
            </li>
            <li><strong>Debrief / Decisión:</strong> Los entrevistadores se reúnen para discutir su feedback. Cada uno da una calificación (ej. "Contratar", "Contratar sin dudarlo", "No contratar"). La decisión final se basa en la suma de este feedback.</li>
        </ol>
        
        <h3>Consejos para el Éxito</h3>
        <ul class="space-y-2">
            <li><strong>Comunica, comunica, comunica:</strong> Es la regla de oro. Explica tu razonamiento antes de escribir una sola línea de código. Trata al entrevistador como un compañero de equipo con el que estás resolviendo un problema.</li>
            <li><strong>Haz preguntas clarificadoras:</strong> Nunca saltes directamente a la codificación. Asegúrate de entender completamente el problema. ¿Cuáles son los tipos de entrada? ¿Cuáles son los casos límite? ¿Cómo debe manejarse una entrada inválida?</li>
            <li><strong>Empieza con la fuerza bruta:</strong> Si no ves la solución óptima de inmediato, está bien decir: "Una forma de resolver esto sería con un enfoque de fuerza bruta que tendría una complejidad de O(n²). Funciona, pero podemos optimizarlo. Déjame pensar en cómo mejorar esto...". Demuestra que puedes encontrar una solución funcional antes de optimizar.</li>
            <li><strong>Gestiona el tiempo:</strong> No te quedes atascado en una parte del problema por demasiado tiempo. Si estás en un callejón sin salida, verbalízalo y pide una pista. Es mejor resolver el problema con una pequeña ayuda que no resolverlo en absoluto.</li>
        </ul>`,
};

const quizData = {
    'part1-quiz': {
        title: 'Cuestionario: La Fundación',
        unlocks: 'part2',
        questions: [
            { id: 'p1q1', q: '¿Qué estructura de datos sigue el principio LIFO (Last-In, First-Out)?', o: ['Cola (Queue)', 'Pila (Stack)', 'Lista Enlazada', 'Árbol'], a: 1 },
            { id: 'p1q2', q: '¿Cuál es la complejidad temporal promedio para buscar un elemento en un Hash Table?', o: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], a: 0 },
            { id: 'p1q3', q: '¿Qué estructura de datos es más adecuada para implementar una cola de prioridad?', o: ['Array no ordenado', 'Pila (Stack)', 'Montículo (Heap)', 'Hash Table'], a: 2 },
            { id: 'p1q4', q: 'Un algoritmo con complejidad O(n log n) es generalmente más rápido que uno con O(n²).', o: ['Verdadero', 'Falso'], a: 0 },
            { id: 'p1q5', q: 'BFS (Búsqueda en Amplitud) utiliza una _______ para explorar un grafo.', o: ['Pila (Stack)', 'Recursión', 'Cola (Queue)', 'Tabla Hash'], a: 2 },
        ]
    },
    'part2-quiz': {
        title: 'Cuestionario: La Aplicación',
        unlocks: 'part3',
        questions: [
            { id: 'p2q1', q: 'El patrón "Sliding Window" (Ventana Deslizante) es más útil para problemas que involucran:', o: ['Listas enlazadas con ciclos.', 'Subarrays o substrings contiguos.', 'Árboles y grafos.', 'Ordenamiento de elementos.'], a: 1 },
            { id: 'p2q2', q: '¿Para qué se usa comúnmente el patrón de punteros "Fast & Slow"?', o: ['Para encontrar el elemento más grande en un array.', 'Para detectar ciclos en una lista enlazada.', 'Para ordenar un array en tiempo O(n).', 'Para fusionar dos arrays ordenados.'], a: 1 },
            { id: 'p2q3', q: 'El ordenamiento topológico se puede aplicar a cualquier tipo de grafo.', o: ['Verdadero', 'Falso'], a: 1 },
        ]
    },
    'part3-quiz': {
        title: 'Cuestionario: El Arquitecto',
        unlocks: 'part4',
        questions: [
            { id: 'p3q1', q: '¿Qué significa "Escalabilidad Horizontal"?', o: ['Añadir más recursos (CPU, RAM) a un único servidor.', 'Añadir más servidores al sistema.', 'Optimizar el código para que sea más rápido.', 'Reducir la latencia de la red.'], a: 1 },
            { id: 'p3q2', q: 'Según el Teorema CAP, en un sistema distribuido con una partición de red, ¿qué dos propiedades debes elegir entre ellas?', o: ['Consistencia y Performance', 'Disponibilidad y Seguridad', 'Consistencia y Disponibilidad', 'Latencia y Rendimiento'], a: 2 },
            { id: 'p3q3', q: 'Redis y Memcached son ejemplos de:', o: ['Bases de datos relacionales.', 'Sistemas de colas de mensajes.', 'Sistemas de caché en memoria.', 'Balanceadores de carga.'], a: 2 },
        ]
    },
     'part4-quiz': {
        title: 'Cuestionario: El Elemento Humano',
        unlocks: null, // No desbloquea nada nuevo
        questions: [
            { id: 'p4q1', q: '¿Qué significa la "A" en el método STAR?', o: ['Análisis', 'Acción', 'Actitud', 'Audiencia'], a: 1 },
            { id: 'p4q2', q: 'En una entrevista, si no sabes la solución óptima a un problema de algoritmos, ¿qué deberías hacer primero?', o: ['Quedarte en silencio hasta que se te ocurra.', 'Proponer una solución de fuerza bruta funcional y luego discutir optimizaciones.', 'Pedir inmediatamente la solución.', 'Cambiar de tema.'], a: 1 },
        ]
    },
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

const CodeRunner = ({ codeId }: { codeId: string }) => {
    const [editor, setEditor] = useState<any>(null);
    const [output, setOutput] = useState<string[]>([]);
    const [error, setError] = useState('');
    const editorRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.CodeMirror || !editorRef.current) return;
        
        const cm = window.CodeMirror(editorRef.current, {
            value: codeExamples[codeId as keyof typeof codeExamples],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [codeId]);

    const runCode = () => {
        if (!editor) return;
        const code = editor.getValue();
        setOutput([]);
        setError('');

        const capturedLogs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
            capturedLogs.push(args.map(arg => {
                if (typeof arg === 'object' && arg !== null) {
                    try { return JSON.stringify(arg, null, 2); } catch (e) { return '[Object]'; }
                }
                return String(arg);
            }).join(' '));
        };

        try {
            new Function(code)();
            setOutput(capturedLogs);
        } catch (e: any) {
            setError(e.stack || e.toString());
        } finally {
            console.log = originalLog;
        }
    };
    
    const resetCode = () => {
        if (editor) {
            editor.setValue(codeExamples[codeId as keyof typeof codeExamples]);
        }
    };

    return (
        <Card className="my-6">
            <CardContent className="p-0">
                <div ref={editorRef} className="code-editor-container [&_.CodeMirror]:rounded-t-lg [&_.CodeMirror]:border-0"></div>
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

const Quiz = ({ quizId, onPass }: { quizId: keyof typeof quizData; onPass: (part: string | null) => void; }) => {
    const quiz = quizData[quizId];
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    if (!quiz) return <p>Cuestionario no encontrado.</p>;
    
    const { questions } = quiz;

    const handleSelect = (questionId: string, answerIndex: number) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.a ? 1 : 0), 0);
        if ((score / questions.length) >= 0.8) {
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
        <Card className="my-8 border-primary border-2 shadow-lg">
            <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                {!isSubmitted && <CardDescription>Selecciona la respuesta correcta para cada pregunta. Necesitas un 80% para desbloquear la siguiente sección.</CardDescription>}
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
    const [unlockedParts, setUnlockedParts] = useState<Record<string, boolean>>({'part1': true});
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        try {
            const savedState = localStorage.getItem('guideUnlockedParts');
            if (savedState) {
                setUnlockedParts(JSON.parse(savedState));
            }
        } catch (error) {
            console.error("Failed to parse unlocked parts from localStorage", error);
            setUnlockedParts({'part1': true});
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            try {
                localStorage.setItem('guideUnlockedParts', JSON.stringify(unlockedParts));
            } catch (error) {
                 console.error("Failed to save unlocked parts to localStorage", error);
            }
        }
    }, [unlockedParts, isClient]);

    const handlePassQuiz = (partToUnlock: string | null) => {
        if (partToUnlock) {
            setUnlockedParts(prev => ({ ...prev, [partToUnlock]: true }));
        }
    };
    
    const handleSelectSection = (id: string) => {
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
        if (currentSectionId.endsWith('-quiz')) {
            return <Quiz quizId={currentSectionId as keyof typeof quizData} onPass={handlePassQuiz} />;
        }

        const htmlContent = contentData[currentSectionId as keyof typeof contentData] || '<p>Contenido no disponible.</p>';
        return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };

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
                    const isPartUnlocked = !!unlockedParts[item.id] || item.id === 'welcome';
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
                                                {child.id.endsWith('-quiz') ? <BrainCircuit className="mr-2 h-4 w-4"/> : <PlayCircle className="mr-2 h-4 w-4"/>}
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
                    <header className="flex items-center justify-between border-b p-4 md:justify-start md:gap-4">
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                            <Menu/>
                        </Button>
                        <h1 className="text-xl font-semibold">{currentSectionTitle}</h1>
                        <div>{/* Placeholder for other actions */}</div>
                    </header>
                    <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
                         <div className="max-w-4xl mx-auto">
                           {renderContent()}
                           {isClient && currentSectionId === 'part2-sec4' && (
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

    