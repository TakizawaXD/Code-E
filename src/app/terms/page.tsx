
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
       <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/auth/signup">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al registro
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Términos y Condiciones de Code-E</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar Code-E (en adelante, "la Plataforma"), usted acepta estar sujeto a estos Términos y Condiciones ("Términos"), todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio.</p>

          <h2>2. Uso de la Licencia</h2>
          <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en la Plataforma para visualización transitoria personal y no comercial únicamente. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:</p>
          <ul>
            <li>Modificar o copiar los materiales;</li>
            <li>Usar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
            <li>Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en la Plataforma;</li>
            <li>Eliminar cualquier derecho de autor u otras anotaciones de propiedad de los materiales; o</li>
            <li>Transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor.</li>
          </ul>
          <p>Esta licencia terminará automáticamente si usted viola alguna de estas restricciones y puede ser terminada por Code-E en cualquier momento.</p>

          <h2>3. Descargo de Responsabilidad</h2>
          <p>Los materiales en la Plataforma se proporcionan "tal cual". Code-E no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, entre otras, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de la propiedad intelectual u otra violación de derechos.</p>

          <h2>4. Limitaciones</h2>
          <p>En ningún caso Code-E o sus proveedores serán responsables de los daños (incluidos, entre otros, los daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales en la Plataforma, incluso si Code-E o un representante autorizado de Code-E ha sido notificado oralmente o por escrito de la posibilidad de dicho daño.</p>

          <h2>5. Cuenta de Usuario</h2>
          <p>Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, y de restringir el acceso a su computadora. Acepta la responsabilidad de todas las actividades que ocurran bajo su cuenta o contraseña.</p>

          <h2>6. Contenido del Usuario</h2>
          <p>Usted es el único responsable del contenido que publica en la Plataforma, incluidos comentarios, preguntas y proyectos. Al publicar contenido, nos otorga una licencia mundial, no exclusiva, libre de regalías para usar, reproducir y distribuir dicho contenido en relación con la Plataforma.</p>

          <h2>7. Modificaciones de los Términos</h2>
          <p>Code-E puede revisar estos Términos en cualquier momento sin previo aviso. Al usar esta Plataforma, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones.</p>

          <h2>8. Ley Aplicable</h2>
          <p>Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de su jurisdicción local y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales de ese Estado o lugar.</p>
        </CardContent>
      </Card>
    </div>
  );
}

    