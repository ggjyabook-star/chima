// Database of analytical news articles
const ARTICLES = [
    {
        id: "dossier-negro-elvira-marin",
        category: "investigacion",
        categoryLabel: "Investigación Especial",
        title: "DOSSIER NEGRO: Elvira Marín Sánchez, catalogada como lo peor en la educación mexiquense, en Chimalhuacan y su red criminal de despojos y soplones",
        excerpt: "Docentes del colectivo denuncian que la Subdirectora Regional simula alinearse con los principios de la transformación mientras replica el nepotismo, desvío de recursos y venta de plazas de administraciones pasadas.",
        content: `
            <p><strong>CHIMALHUACÁN / TEXCOCO, Edomex.</strong> — El descontento y la indignación en las aulas mexiquenses han llegado a su límite. Un análisis detallado de expedientes y denuncias públicas coloca a la Subdirectora Regional de Educación Básica de Texcoco, <strong>Elvira Marín Sánchez</strong>, como la figura más dañina y destructora del sistema educativo en la región de Chimalhuacán.</p>
            
            <h3>Un Historial de Abuso, Extorsión y Enriquecimiento Ilícito</h3>
            <p>Elvira Marín Sánchez, escudándose bajo las siglas y el discurso de honestidad del partido Morena y simulando una supuesta protección de la gobernadora Delfina Gómez, ha convertido la educación pública en su feudo familiar y económico. La investigación demuestra que la funcionaria ha traicionado los principios más elementales de la educación pública mediante tres ejes delictivos:</p>
            
            <ul>
                <li><strong>El Mercado Negro de Plazas:</strong> En complicidad con su pareja, el ex-supervisor destituido <strong>Rodrigo Rojas Díaz</strong>, cobraban presuntamente cuotas o "moches" de hasta <strong>50,000 pesos</strong> a maestros necesitados a cambio de otorgarles o regularizarles sus plazas laborales, estafando a docentes como la maestra Lizzeth Cruz.</li>
                <li><strong>Nepotismo Descarado:</strong> Utilizó su poder para regalar la plaza de Representante Jurídico Regional (sin concurso ni experiencia requerida) a su hijastro <strong>Ricardo Rojas Hernández</strong>, premiándolo además con un automóvil oficial del erario público para su uso personal.</li>
                <li><strong>Saqueo a la Niñez:</strong> La red es señalada por interceptar y desviar camiones cargados con libros de texto gratuitos de la SEP destinados a escuelas marginadas de Chimalhuacán, privando a miles de niños de su material educativo esencial.</li>
            </ul>

            <h3>Red de Informantes</h3>
            <p>Se señala que para mantener su influencia en las escuelas Miguel Hidalgo y Hermanos Serdán, Elvira Marín y Rodrigo Rojas cuentan con una red de informantes que les reportan de manera constante sobre las actividades de los docentes dentro de los planteles.</p>

            <h3 class="evidence-section-title">Expediente de Evidencias</h3>
            <p>A continuación se consolidan los documentos, pancartas de protesta en los planteles, capturas de pantalla de la red de soplones y fotografías de los vehículos y desvíos que demuestran el actuar de Elvira Marín Sánchez:</p>
            
            <div class="evidence-gallery">
                <!-- Elvira Corrupcion -->
                <div class="evidence-wrapper">
                    <img src="images/escandalo-en-chimalhuacan-elviracorrupcion-1.jpeg" class="evidence-img" alt="Evidencia: Denuncia contra Elvira Marín">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/escandalo-en-chimalhuacan-elviracorrupcion-6.jpeg" class="evidence-img" alt="Evidencia: Red de complicidades">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/escandalo-en-chimalhuacan-elviracorrupcion-7.jpeg" class="evidence-img" alt="Evidencia: Desvíos en Texcoco">
                </div>
                
                <!-- Vehiculo Nepotismo -->
                <div class="evidence-wrapper">
                    <img src="images/evidence-1.jpeg" class="evidence-img" alt="Evidencia: Vehículo oficial asignado al hijastro">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-7.jpeg" class="evidence-img" alt="Evidencia: Fotografía física del automóvil">
                </div>
                
                <!-- Protestas e Inconformidades -->
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-1.jpeg" class="evidence-img" alt="Evidencia: Protestas en la primaria Miguel Hidalgo">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-5.jpeg" class="evidence-img" alt="Evidencia: Oficios de rechazo al retorno de Rojas">
                </div>
                
                <!-- Red de Infiltrados -->
                <div class="evidence-wrapper">
                    <img src="images/red-de-corrupcion-en-escuelas-1.jpeg" class="evidence-img" alt="Evidencia: Acta de denuncia por espionaje interno">
                </div>
            </div>
        `,
        image: "images/escandalo-en-chimalhuacan-elviracorrupcion-1.jpeg",
        date: "8 de Junio, 2026",
        author: "Unidad de Investigación",
        featured: true
    },
    {
        id: "escandalo-influencias-educacion",
        category: "investigacion",
        categoryLabel: "Investigación Especial",
        title: "NEPOTISMO DESCARADO: Elvira Marín coloca a su hijastro Ricardo Rojas como Representante Jurídico sin experiencia y le regala auto oficial",
        excerpt: "Denuncian tráfico de influencias absoluto en Texcoco y Chimalhuacán: Ricardo Rojas Hernández recibió puesto clave en la SEP y vehículo financiado por el erario gracias a su madrastra.",
        content: `
            <p><strong>CHIMALHUACÁN / TEXCOCO, Edomex.</strong> — Crece el escándalo político en la educación básica de la región. Nuevas filtraciones de nóminas y registros vehiculares confirman un caso de descarado nepotismo ejecutado por la Subdirectora <strong>Elvira Marín Sánchez</strong>.</p>
            
            <h3>Un Cargo Jurídico de Regalo</h3>
            <p>Violando todas las normativas de contratación y el perfil profesional exigido por la ley educativa, Elvira Marín Sánchez impuso a su hijastro, <strong>Ricardo Rojas Hernández</strong> (hijo de su pareja Rodrigo Rojas Díaz), en el puesto de Representante Jurídico del sector escolar regional.</p>
            <p>Profesores con maestrías, doctorados y décadas de trayectoria jurídica limpia fueron ignorados para otorgar el nombramiento y un sueldo de primer nivel a un joven que carece por completo de experiencia en materia de derecho laboral y educativo.</p>
            
            <h3>El Automóvil del Erario Público</h3>
            <p>Las evidencias obtenidas por el colectivo docente muestran que a Ricardo Rojas Hernández no solo se le obsequió la plaza jurídica, sino también un automóvil oficial financiado con recursos públicos municipales y estatales para su traslado personal. Mientras las escuelas de Chimalhuacán carecen de presupuesto para mantenimiento básico, la familia de Elvira Marín goza de automóviles y sueldos pagados por el pueblo.</p>

            <h3 class="evidence-section-title">Evidencias Fotográficas</h3>
            <p>A continuación se adjuntan los registros y capturas de pantalla del automóvil asignado y del nombramiento de Ricardo Rojas Hernández:</p>
            
            <div class="evidence-gallery">
                <div class="evidence-wrapper">
                    <img src="images/evidence-1.jpeg" class="evidence-img" alt="Evidencia 1: Registro del vehículo asignado">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-3.jpeg" class="evidence-img" alt="Evidencia 2: Conversaciones del acuerdo">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-4.jpeg" class="evidence-img" alt="Evidencia 3: Filtración de nombramientos">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-5.jpeg" class="evidence-img" alt="Evidencia 4: Documento oficial">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-6.jpeg" class="evidence-img" alt="Evidencia 5: Captura de pantalla de la denuncia">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-7.jpeg" class="evidence-img" alt="Evidencia 6: Evidencia física del automóvil">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-8.jpeg" class="evidence-img" alt="Evidencia 7: Detalle de contratos">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/evidence-9.jpeg" class="evidence-img" alt="Evidencia 8: Confirmación de asignación">
                </div>
            </div>
        `,
        image: "images/evidence-1.jpeg",
        date: "8 de Junio, 2026",
        author: "Unidad de Investigación",
        featured: false
    },
    {
        id: "colectivo-transparencia-reinstalacion",
        category: "investigacion",
        categoryLabel: "Investigación Especial",
        title: "¡ALERTA MÁXIMA EN ESCUELAS! Ex-supervisor Rodrigo Rojas Díaz, destituido por ladrón y extorsionador, pretende regresar protegido por Elvira Marín",
        excerpt: "Docentes del Colectivo de Transparencia cuelgan mantas de repudio en la Primaria Miguel Hidalgo para frenar el regreso de la red delictiva de cobro de 'moches'.",
        content: `
            <p><strong>CHIMALHUACÁN, Edomex.</strong> — Un clima de tensión y alerta máxima se vive en las escuelas primarias de la región. El Colectivo <em>Maestros por la Transparencia</em> ha denunciado públicamente el intento de reinstalar en funciones de supervisión al polémico exfuncionario <strong>Rodrigo Rojas Díaz</strong>.</p>
            
            <h3>El Historial Delictivo de Rodrigo Rojas</h3>
            <p>Rojas Díaz fue destituido de su cargo hace poco más de un año después de que una ola de denuncias formales demostrara que extorsionaba sistemáticamente a directores y docentes, cobrando cuotas o "moches" bajo amenaza de actas administrativas falsas o remoción de planteles.</p>
            
            <h3>El Plan de Reinstalación de Elvira Marín</h3>
            <p>De acuerdo con la alerta magisterial, la Subdirectora Regional Elvira Marín Sánchez está maniobrando a nivel estatal para imponer nuevamente a su pareja, Rodrigo Rojas Díaz, en la zona escolar de Chimalhuacán. Esta imposición busca recuperar el control de los recursos de la Primaria "Miguel Hidalgo y Costilla" y otras escuelas para continuar con sus viejos esquemas de cobro ilegal.</p>
            <p>Mantas y pancartas anónimas han sido colocadas en los planteles educativos por maestros y padres de familia organizados como advertencia de que la comunidad escolar no permitirá el regreso de los corruptos.</p>

            <h3 class="evidence-section-title">Evidencias Fotográficas</h3>
            <p>A continuación se detallan las capturas de pancartas colocadas en la escuela y los reportes de alerta del colectivo docente:</p>
            
            <div class="evidence-gallery">
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-1.jpeg" class="evidence-img" alt="Evidencia 1: Pancartas de reclamo en plantel">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-3.jpeg" class="evidence-img" alt="Evidencia 2: Denuncia pública">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-4.jpg" class="evidence-img" alt="Evidencia 3: Filtración de acuerdos">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-5.jpeg" class="evidence-img" alt="Evidencia 4: Documentos de la destitución anterior">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/colectivo-por-transpariencia-3-7.jpeg" class="evidence-img" alt="Evidencia 5: Notificación del colectivo">
                </div>
            </div>
        `,
        image: "images/colectivo-por-transpariencia-3-1.jpeg",
        date: "7 de Junio, 2026",
        author: "Colaboración Ciudadana",
        featured: false
    },
    {
        id: "red-corrupcion-escuelas-infiltracion",
        category: "investigacion",
        categoryLabel: "Investigación Especial",
        title: "LA RED DE SOPLONES DE ELVIRA MARÍN: Acusan a Miriam Cordero y Brenda León de fabricar denuncias falsas contra maestros honestos",
        excerpt: "Denuncian infiltración y terror laboral en las primarias Miguel Hidalgo y Hermanos Serdán: Señalan red de espionaje escolar para forzar despidos injustificados.",
        content: `
            <p><strong>CHIMALHUACÁN, Edomex.</strong> — Docentes del municipio de Chimalhuacán denuncian un estado de "terror laboral" en sus planteles. Señalan una supuesta red de espionaje e infiltración que opera directamente para beneficiar la impunidad de Elvira Marín Sánchez y Rodrigo Rojas Díaz.</p>
            
            <h3>Infiltrados y Espionaje de Colegas</h3>
            <p>De acuerdo con testimonios protegidos, las docentes <strong>Miriam Arlet Cordero Aguilar</strong> y <strong>Brenda Paola León Cortés</strong> actúan como "soplones" e informantes directas en las escuelas. Su función consiste en espiar a sus compañeros de trabajo, sustraer información confidencial de alumnos y docentes, e ignorar la autoridad del director legítimo de la escuela para reportarle a Rodrigo Rojas.</p>
            <p>Con esta información, la red fabrica expedientes falsos y acusaciones amañadas para cesar o castigar a los maestros honestos que se oponen a sus malas prácticas.</p>
            
            <h3>Falsificación de Pruebas en el Plantel Hermanos Serdán</h3>
            <p>Las denuncias también involucran a <strong>Laura Patricia Arizmendi Álvarez</strong> (operadora y amiga íntima de Elvira Marín), <strong>Patricia Hernández Castañeda</strong> y <strong>Araceli Hernández Guzmán</strong>, señalándolas de ingresar a las escuelas para eliminar registros de asistencia, robar evidencias y presionar a las autoridades locales con denuncias inventadas.</p>
            <p>El magisterio de Chimalhuacán exige a la SEP Estatal una investigación profunda del acoso laboral e iniciar procesos de destitución inmediatos contra esta red de infiltrados.</p>

            <h3 class="evidence-section-title">Evidencias Fotográficas</h3>
            <p>A continuación se muestran los reportes de inconformidad y la documentación de las denuncias internas interpuestas por el personal afectado:</p>
            
            <div class="evidence-gallery">
                <div class="evidence-wrapper">
                    <img src="images/red-de-corrupcion-en-escuelas-1.jpeg" class="evidence-img" alt="Evidencia 1: Solicitud de auditoría formal">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/red-de-corrupcion-en-escuelas-2.jpeg" class="evidence-img" alt="Evidencia 2: Lista de implicados">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/red-de-corrupcion-en-escuelas-3.jpg" class="evidence-img" alt="Evidencia 3: Escrito de inconformidad docente">
                </div>
                <div class="evidence-wrapper">
                    <img src="images/red-de-corrupcion-en-escuelas-6.jpeg" class="evidence-img" alt="Evidencia 4: Documentos de seguimiento">
                </div>
            </div>
        `,
        image: "images/red-de-corrupcion-en-escuelas-1.jpeg",
        date: "6 de Junio, 2026",
        author: "Unidad de Investigación",
        featured: false
    },
    {
        id: "seguridad-milenio-nacimiento",
        category: "seguridad",
        categoryLabel: "Seguridad y Justicia",
        title: "Policías municipales y Guardia Nacional auxilian labor de parto en calles de Chimalhuacán",
        excerpt: "Una joven dio a luz en la vía pública frente a las instalaciones del C4 Chimalhuacán tras presentar fuertes contracciones. Tanto la madre como la recién nacida se reportan estables.",
        content: `
            <p><strong>CHIMALHUACÁN, Edomex.</strong> — En una rápida acción de asistencia ciudadana, elementos de la Dirección General de Seguridad Ciudadana y Tránsito Municipal de Chimalhuacán, en coordinación con la Guardia Nacional, auxiliaron de manera exitosa a una joven que entró en labor de parto en plena vía pública.</p>
            
            <h3>Emergencia a las Puertas del C4</h3>
            <p>Los hechos ocurrieron cuando la mujer intentó trasladarse a las instalaciones del Centro de Control, Comando, Comunicación y Cómputo (C4) de Chimalhuacán para solicitar auxilio debido a contracciones sumamente fuertes y avanzadas. Sin embargo, ante la inminencia del nacimiento, no logró ingresar al complejo médico y entró en labor de parto sobre la banqueta.</p>
            <p>Elementos policiales que resguardaban el perímetro reaccionaron de inmediato y aplicaron sus conocimientos de primeros auxilios y atención prehospitalaria para asistir en el alumbramiento, salvaguardando en todo momento la integridad física de la madre y del bebé.</p>
            
            <h3>Resguardo y Traslado al Hospital 90 Camas</h3>
            <p>Debido a que el nacimiento se registró en una vialidad con gran carga vehicular, elementos de la Guardia Nacional establecieron un perímetro de seguridad vial para que los uniformados municipales pudieran laborar sin contratiempos.</p>
            <p>Minutos después, paramédicos de Protección Civil arribaron al sitio para evaluar a la madre y a la recién nacida, confirmando que ambas se encontraban estables y en perfecto estado de salud. Siguiendo los protocolos médicos correspondientes, ambas fueron trasladadas al Hospital General '90 Camas' para su valoración definitiva.</p>
        `,
        image: "images/milenio-birth.jpg",
        date: "8 de Junio, 2026",
        author: "Redacción Policial",
        featured: false
    },
    {
        id: "seguridad-milenio-chelerias",
        category: "seguridad",
        categoryLabel: "Seguridad y Justicia",
        title: "Clausuran establecimientos y chelerías ambulantes por venta de alcohol a menores en Chimalhuacán",
        excerpt: "Operativos de seguridad en barrios como Hojalateros y Cabecera Municipal culminan con la suspensión de locales comerciales que infringían el Bando Municipal 2026.",
        content: `
            <p><strong>CHIMALHUACÁN, Edomex.</strong> — El gobierno municipal de Chimalhuacán endureció las medidas de vigilancia comercial y, en lo que va del año, ha ejecutado la clausura y suspensión de al menos 15 establecimientos dedicados a la venta irregular de alcohol o que permitían el consumo a menores de edad.</p>
            
            <h3>Operativo Control y Vigilancia</h3>
            <p>Las últimas intervenciones se ejecutaron bajo el esquema del programa metropolitano <em>'Control y Vigilancia de Alcohol: Consumo y Copeo'</em>. Las autoridades procedieron a suspender las actividades de siete establecimientos fijos y puestos de venta semifijos distribuidos en diversas colonias.</p>
            <p>Las inspecciones se concentraron en áreas detectadas como conflictivas, incluyendo los barrios de Hojalateros, Orfebres, la Cabecera Municipal, Lomas de Buenavista y Lomas de Chocolín. Personal de normatividad comercial verificó que las 'chelerías' no invadieran el espacio público, contaran con cúpulas de videovigilancia y, de manera primordial, no comercializaran alcohol con menores de edad.</p>
            
            <h3>Requisitos de Operación</h3>
            <p>El ayuntamiento recordó a los dueños de comercios que para expender este tipo de productos deben cumplir estrictamente con el Bando Municipal 2026, el cual obliga a poseer licencias vigentes de uso de suelo, aviso de funcionamiento sanitario de la Jurisdicción Texcoco/Cofepris y los vistos buenos correspondientes de Protección Civil y Medio Ambiente.</p>
        `,
        image: "images/milenio-bars.jpg",
        date: "8 de Junio, 2026",
        author: "Normatividad Comercial",
        featured: false
    },
    {
        id: "sociedad-milenio-antorcha",
        category: "sociedad",
        categoryLabel: "Sociedad y Obras",
        title: "Detienen a líder del Movimiento Antorcha Campesina en Chimalhuacán tras altercado en manifestación",
        excerpt: "El dirigente Zacarías 'N' fue aprehendido por la policía tras enfrentarse con oficiales durante el retiro de lonas de protesta en la Avenida del Peñón.",
        content: `
            <p><strong>CHIMALHUACÁN, Edomex.</strong> — El dirigente local del movimiento antorchista, identificado como Zacarías 'N', fue arrestado por elementos de la policía municipal de Chimalhuacán bajo cargos de presunta agresión contra oficiales de seguridad durante una protesta social.</p>
            
            <h3>Conflicto por Colocación de Lonas</h3>
            <p>Integrantes de Antorcha Campesina se movilizaron en diversas avenidas del municipio para denunciar deficiencias en los servicios de agua y drenaje. Como parte de su protesta, los manifestantes comenzaron a colgar lonas y pancartas en los puentes peatonales de la Avenida del Peñón, a la altura del Hospital General 90 Camas.</p>
            <p>Elementos de la policía procedieron al retiro de estos materiales debido a que los artículos 213 y 214 del Bando Municipal prohíben expresamente la instalación de propaganda y anuncios no autorizados en la infraestructura pública. Dicha acción generó molestia entre los manifestantes, derivando en un enfrentamiento físico donde un oficial resultó agredido, lo que motivó el arresto del dirigente.</p>
            
            <h3>Mapeo de Obras Hidráulicas</h3>
            <p>Tras el incidente, el gobierno municipal reiteró su disposición al diálogo, detallando que se han sostenido al menos tres mesas de trabajo con representantes del movimiento. Respecto a las demandas de agua potable, las autoridades informaron que se encuentran realizando la perforación y equipamiento de los pozos 'Hojalateros' y 'Vidrieros', así como la planeación de los pozos 'Fundidores' y 'La Palma' para resolver la escasez en el mediano plazo.</p>
        `,
        image: "images/milenio-antorcha.jpg",
        date: "7 de Junio, 2026",
        author: "Corresponsalía Metropolitana",
        featured: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Current date representation
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date('2026-06-08').toLocaleDateString('es-ES', options);
    }

    // Render Articles function
    function renderArticles(category = 'all') {
        const featuredContainer = document.getElementById('featured-grid-container');
        const feedContainer = document.getElementById('feed-grid-container');
        const featuredSection = document.getElementById('featured-section');
        const feedLabel = document.getElementById('feed-label');

        // Clear containers
        featuredContainer.innerHTML = '';
        feedContainer.innerHTML = '';

        // Filter articles
        const filteredArticles = category === 'all' 
            ? ARTICLES 
            : ARTICLES.filter(art => art.category === category);

        // Separate featured (investigations) and regular feed
        const featuredList = filteredArticles.filter(art => art.featured);
        let regularList = filteredArticles.filter(art => !art.featured);

        // Interleave investigations and other news to mix them beautifully on Portada
        if (category === 'all') {
            const investigations = regularList.filter(art => art.category === 'investigacion');
            const otherNews = regularList.filter(art => art.category !== 'investigacion');
            const mixed = [];
            const maxLen = Math.max(investigations.length, otherNews.length);
            for (let i = 0; i < maxLen; i++) {
                if (i < otherNews.length) mixed.push(otherNews[i]);
                if (i < investigations.length) mixed.push(investigations[i]);
            }
            regularList = mixed;
        }

        // Handle layout display depending on category filter
        if (category !== 'all' && featuredList.length === 0) {
            featuredSection.style.display = 'none';
            feedLabel.textContent = `Artículos en: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        } else {
            featuredSection.style.display = 'block';
            feedLabel.textContent = category === 'all' ? 'Últimas Noticias' : `Investigaciones en: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        }

        // 1. Render Featured Section (Top)
        if (featuredList.length > 0) {
            // Main featured article (left)
            const mainArt = featuredList[0];
            const mainHtml = `
                <div class="featured-main" data-id="${mainArt.id}">
                    <div class="featured-img-wrapper" style="background-image: url('${mainArt.image}')"></div>
                    <div class="featured-content">
                        <span class="category-tag">${mainArt.categoryLabel}</span>
                        <h3 class="featured-title">${mainArt.title}</h3>
                        <p class="featured-excerpt">${mainArt.excerpt}</p>
                        <div class="meta-info">
                            <span>${mainArt.author}</span>
                            <span>&bull;</span>
                            <span>${mainArt.date}</span>
                        </div>
                    </div>
                </div>
            `;
            
            // Side featured list (right)
            let sideHtml = '<div class="featured-list">';
            for (let i = 1; i < featuredList.length; i++) {
                const sideArt = featuredList[i];
                sideHtml += `
                    <div class="side-article-card" data-id="${sideArt.id}">
                        <div class="side-img" style="background-image: url('${sideArt.image}')"></div>
                        <div class="side-content">
                            <span class="category-tag" style="margin-bottom: 4px;">${sideArt.categoryLabel}</span>
                            <h4 class="side-title">${sideArt.title}</h4>
                            <div class="meta-info">
                                <span>${sideArt.date}</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            sideHtml += '</div>';

            featuredContainer.innerHTML = mainHtml + (featuredList.length > 1 ? sideHtml : '');
        }

        // 2. Render Feed Section
        if (regularList.length > 0) {
            regularList.forEach(art => {
                const cardHtml = `
                    <article class="article-card" data-id="${art.id}">
                        <div class="card-img" style="background-image: url('${art.image}')"></div>
                        <div class="card-body">
                            <span class="category-tag">${art.categoryLabel}</span>
                            <h4 class="card-title">${art.title}</h4>
                            <p class="card-excerpt">${art.excerpt}</p>
                            <div class="meta-info" style="margin-top: auto;">
                                <span>${art.author}</span>
                                <span>&bull;</span>
                                <span>${art.date}</span>
                            </div>
                        </div>
                    </article>
                `;
                feedContainer.innerHTML += cardHtml;
            });
        } else if (category !== 'all' && regularList.length === 0 && featuredList.length > 0) {
            // If we filtered and only have featured, we display them nicely.
            feedLabel.textContent = 'Reportajes';
            featuredList.forEach(art => {
                const cardHtml = `
                    <article class="article-card" data-id="${art.id}">
                        <div class="card-img" style="background-image: url('${art.image}')"></div>
                        <div class="card-body">
                            <span class="category-tag">${art.categoryLabel}</span>
                            <h4 class="card-title">${art.title}</h4>
                            <p class="card-excerpt">${art.excerpt}</p>
                            <div class="meta-info" style="margin-top: auto;">
                                <span>${art.author}</span>
                                <span>&bull;</span>
                                <span>${art.date}</span>
                            </div>
                        </div>
                    </article>
                `;
                feedContainer.innerHTML += cardHtml;
            });
        }

        // Attach click events for modal reader
        document.querySelectorAll('[data-id]').forEach(element => {
            element.addEventListener('click', () => {
                const articleId = element.getAttribute('data-id');
                openArticleModal(articleId);
            });
        });
    }

    // Modal Interactions
    const modal = document.getElementById('article-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const shareBtn = document.getElementById('modal-share-btn');
    const shareToast = document.getElementById('share-toast');
    let activeArticleId = null;

    function openArticleModal(id) {
        const article = ARTICLES.find(art => art.id === id);
        if (!article) return;

        activeArticleId = id;
        document.getElementById('modal-img').style.backgroundImage = `url('${article.image}')`;
        document.getElementById('modal-category').textContent = article.categoryLabel;
        document.getElementById('modal-title').textContent = article.title;
        document.getElementById('modal-meta').textContent = `Por ${article.author} | Publicado el ${article.date}`;
        document.getElementById('modal-text').innerHTML = article.content;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevents background scroll
        
        // Update URL path dynamically for sharing
        history.replaceState(null, '', '?article=' + id);

        // Generate the share link dynamically
        let shareUrl = '';
        if (window.location.protocol === 'file:') {
            shareUrl = window.location.href.split('?')[0] + '?article=' + id;
        } else {
            shareUrl = window.location.origin + window.location.pathname + '?article=' + id;
        }

        const shareInput = document.getElementById('share-url-input');
        if (shareInput) {
            shareInput.value = shareUrl;
        }

        // Configure social sharing buttons
        const textToShare = `${article.title}`;
        const waBtn = document.getElementById('share-wa');
        const fbBtn = document.getElementById('share-fb');
        const twBtn = document.getElementById('share-tw');

        if (waBtn) {
            waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare + '\n\nLeer más: ' + shareUrl)}`;
        }
        if (fbBtn) {
            fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        }
        if (twBtn) {
            twBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}&url=${encodeURIComponent(shareUrl)}`;
        }
    }

    function closeModal() {
        activeArticleId = null;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset URL path dynamically
        history.replaceState(null, '', window.location.pathname);
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Share button clipboard copy
    shareBtn.addEventListener('click', () => {
        const shareInput = document.getElementById('share-url-input');
        if (!shareInput) return;
        
        shareInput.select();
        shareInput.setSelectionRange(0, 99999); // For mobile devices
        
        navigator.clipboard.writeText(shareInput.value).then(() => {
            shareToast.classList.add('show');
            setTimeout(() => {
                shareToast.classList.remove('show');
            }, 2000);
        }).catch(err => {
            // Fallback for non-secure contexts or certain environments
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    shareToast.classList.add('show');
                    setTimeout(() => {
                        shareToast.classList.remove('show');
                    }, 2000);
                }
            } catch (fallbackErr) {
                console.error('Error al copiar el enlace: ', fallbackErr);
            }
        });
    });

    // Handle Category Filter Clicks
    const filters = document.querySelectorAll('#category-filters a');
    filters.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filters.forEach(f => f.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-category');
            renderArticles(category);
        });
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.querySelector('.theme-icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Initial render
    renderArticles();

    // Deep-linking: Open shared article on load if parameter is present in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sharedArticleId = urlParams.get('article');
    if (sharedArticleId) {
        setTimeout(() => {
            openArticleModal(sharedArticleId);
        }, 150);
    }

    // === COMPLAINT BOX & ADMIN DASHBOARD FUNCTIONALITY ===
    
    // Selectors
    const complaintModal = document.getElementById('complaint-modal');
    const complaintBoxLink = document.getElementById('complaint-box-link');
    const complaintCloseBtn = document.getElementById('complaint-close-btn');

    const dashboardModal = document.getElementById('dashboard-modal');
    const adminDashboardLink = document.getElementById('admin-dashboard-link');
    const dashboardCloseBtn = document.getElementById('dashboard-close-btn');

    // Pre-populate mock complaints if empty
    if (!localStorage.getItem('chima_denuncias')) {
        const demoComplaint = [
            {
                id: 'den-demo1',
                date: '8 de Junio de 2026, 10:15',
                title: 'Cobros indebidos de cuotas de inscripción en Escuela Hermanos Serdán',
                category: 'Educación',
                description: 'Padres de familia del barrio Orfebres denuncian públicamente que la dirección escolar está condicionando la inscripción del próximo ciclo escolar al pago en efectivo de una cuota de 350 pesos. Quien no cuente con el recibo de pago, es rechazado del plantel.',
                images: [],
                status: 'pendiente'
            }
        ];
        localStorage.setItem('chima_denuncias', JSON.stringify(demoComplaint));
    }

    // Modal Control: Complaint Box
    function openComplaintModal() {
        complaintModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeComplaintModal() {
        complaintModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (complaintBoxLink) complaintBoxLink.addEventListener('click', (e) => {
        e.preventDefault();
        openComplaintModal();
    });
    if (complaintCloseBtn) complaintCloseBtn.addEventListener('click', closeComplaintModal);
    complaintModal.addEventListener('click', (e) => {
        if (e.target === complaintModal) closeComplaintModal();
    });

    // Modal Control: Admin Dashboard
    function openDashboardModal() {
        dashboardModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Reset view states on open
        document.getElementById('dashboard-login-view').style.display = 'flex';
        document.getElementById('dashboard-admin-view').style.display = 'none';
        document.getElementById('login-error').style.display = 'none';
    }
    
    function closeDashboardModal() {
        dashboardModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (adminDashboardLink) adminDashboardLink.addEventListener('click', (e) => {
        e.preventDefault();
        openDashboardModal();
    });
    if (dashboardCloseBtn) dashboardCloseBtn.addEventListener('click', closeDashboardModal);
    dashboardModal.addEventListener('click', (e) => {
        if (e.target === dashboardModal) closeDashboardModal();
    });

    // Image Upload & Resize Handler (Canvas compression to keep localStorage under 5MB)
    const compFiles = document.getElementById('comp-files');
    const uploadTrigger = document.getElementById('upload-trigger');
    const fileCount = document.getElementById('file-count');
    const imagePreviews = document.getElementById('image-previews');
    let uploadedImages = [];

    if (uploadTrigger) uploadTrigger.addEventListener('click', () => compFiles.click());

    if (compFiles) {
        compFiles.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            if (files.length === 0) return;

            const remainingSpace = 3 - uploadedImages.length;
            const filesToProcess = files.slice(0, remainingSpace);

            filesToProcess.forEach(file => {
                if (!file.type.startsWith('image/')) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        let width = img.width;
                        let height = img.height;
                        const maxDim = 600;

                        if (width > maxDim || height > maxDim) {
                            if (width > height) {
                                height = Math.round((height * maxDim) / width);
                                width = maxDim;
                            } else {
                                width = Math.round((width * maxDim) / height);
                                height = maxDim;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);

                        // Compress to JPEG, quality 0.6 (approx 30KB per photo)
                        const base64 = canvas.toDataURL('image/jpeg', 0.6);
                        uploadedImages.push(base64);
                        renderPreviews();
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            });

            compFiles.value = ''; // Reset input
        });
    }

    function renderPreviews() {
        if (!imagePreviews) return;
        imagePreviews.innerHTML = '';
        fileCount.textContent = `${uploadedImages.length} de 3 foto(s) seleccionada(s)`;
        
        uploadedImages.forEach((base64, index) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            
            previewItem.innerHTML = `
                <img src="${base64}" alt="Vista previa">
                <button type="button" class="preview-remove" data-index="${index}">&times;</button>
            `;
            
            previewItem.querySelector('.preview-remove').addEventListener('click', () => {
                uploadedImages.splice(index, 1);
                renderPreviews();
            });
            
            imagePreviews.appendChild(previewItem);
        });
    }

    // Citizen Form Submission
    const complaintForm = document.getElementById('complaint-form');
    const complaintSuccess = document.getElementById('complaint-success');

    if (complaintForm) {
        complaintForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const title = document.getElementById('comp-title').value;
            const category = document.getElementById('comp-category').value;
            const description = document.getElementById('comp-description').value;
            
            const newComplaint = {
                id: 'den-' + Date.now(),
                date: new Date().toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                }),
                title: title,
                category: category,
                description: description,
                images: [...uploadedImages],
                status: 'pendiente'
            };

            const existingComplaints = JSON.parse(localStorage.getItem('chima_denuncias') || '[]');
            existingComplaints.unshift(newComplaint);
            localStorage.setItem('chima_denuncias', JSON.stringify(existingComplaints));

            complaintForm.reset();
            uploadedImages = [];
            renderPreviews();
            
            complaintForm.style.display = 'none';
            complaintSuccess.style.display = 'block';

            setTimeout(() => {
                complaintForm.style.display = 'flex';
                complaintSuccess.style.display = 'none';
                closeComplaintModal();
            }, 3000);
        });
    }

    // Admin Dashboard Credentials
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'corrupcionchima';

    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const loginView = document.getElementById('dashboard-login-view');
    const adminView = document.getElementById('dashboard-admin-view');
    const logoutBtn = document.getElementById('admin-logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('admin-user').value;
            const pass = document.getElementById('admin-pass').value;

            if (user === ADMIN_USER && pass === ADMIN_PASS) {
                loginError.style.display = 'none';
                loginForm.reset();
                showAdminDashboard();
            } else {
                loginError.style.display = 'block';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            adminView.style.display = 'none';
            loginView.style.display = 'flex';
        });
    }

    function showAdminDashboard() {
        loginView.style.display = 'none';
        adminView.style.display = 'block';
        renderDenunciasAdmin();
    }

    function renderDenunciasAdmin() {
        const listGrid = document.getElementById('denuncias-list-grid');
        const statTotal = document.getElementById('stat-total');
        const statPending = document.getElementById('stat-pending');
        
        const complaints = JSON.parse(localStorage.getItem('chima_denuncias') || '[]');
        
        if (statTotal) statTotal.textContent = complaints.length;
        if (statPending) statPending.textContent = complaints.filter(c => c.status === 'pendiente').length;

        if (!listGrid) return;
        listGrid.innerHTML = '';

        if (complaints.length === 0) {
            listGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 30px 0;">No se han recibido denuncias aún.</p>';
            return;
        }

        complaints.forEach((comp) => {
            const card = document.createElement('div');
            card.className = 'denuncia-admin-card';

            let imgHtml = '';
            if (comp.images && comp.images.length > 0) {
                imgHtml = '<div class="denuncia-evidences">';
                comp.images.forEach(img => {
                    imgHtml += `
                        <div class="denuncia-evidence-thumb" onclick="openEvidenceViewer('${img}')">
                            <img src="${img}" alt="Evidencia">
                        </div>
                    `;
                });
                imgHtml += '</div>';
            }

            card.innerHTML = `
                <div class="denuncia-admin-header">
                    <div>
                        <div class="denuncia-title">${comp.title}</div>
                        <div class="denuncia-meta">Categoría: <strong>${comp.category}</strong> | ${comp.date}</div>
                    </div>
                    <span class="status-badge ${comp.status}">${comp.status}</span>
                </div>
                <div class="denuncia-desc">${comp.description}</div>
                ${imgHtml}
                <div class="denuncia-actions">
                    <button class="action-btn-small" onclick="cycleStatus('${comp.id}')">🔄 Cambiar Estado</button>
                    <button class="action-btn-small delete" onclick="deleteComplaint('${comp.id}')">🗑️ Eliminar</button>
                </div>
            `;

            listGrid.appendChild(card);
        });
    }

    // Global dashboard actions attached to window
    window.cycleStatus = function(id) {
        const complaints = JSON.parse(localStorage.getItem('chima_denuncias') || '[]');
        const comp = complaints.find(c => c.id === id);
        if (!comp) return;

        const statusFlow = ['pendiente', 'revisión', 'aprobada'];
        const currentIdx = statusFlow.indexOf(comp.status);
        const nextIdx = (currentIdx + 1) % statusFlow.length;
        comp.status = statusFlow[nextIdx];

        localStorage.setItem('chima_denuncias', JSON.stringify(complaints));
        renderDenunciasAdmin();
    };

    window.deleteComplaint = function(id) {
        if (!confirm('¿Estás seguro de que deseas eliminar esta denuncia permanentemente?')) return;
        let complaints = JSON.parse(localStorage.getItem('chima_denuncias') || '[]');
        complaints = complaints.filter(c => c.id !== id);
        localStorage.setItem('chima_denuncias', JSON.stringify(complaints));
        renderDenunciasAdmin();
    };

    window.openEvidenceViewer = function(imgSrc) {
        const zoomOverlay = document.createElement('div');
        zoomOverlay.style.position = 'fixed';
        zoomOverlay.style.top = '0';
        zoomOverlay.style.left = '0';
        zoomOverlay.style.width = '100vw';
        zoomOverlay.style.height = '100vh';
        zoomOverlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
        zoomOverlay.style.zIndex = '2000';
        zoomOverlay.style.display = 'flex';
        zoomOverlay.style.justifyContent = 'center';
        zoomOverlay.style.alignItems = 'center';
        zoomOverlay.style.cursor = 'zoom-out';
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
        
        zoomOverlay.appendChild(img);
        zoomOverlay.addEventListener('click', () => zoomOverlay.remove());
        document.body.appendChild(zoomOverlay);
    };
});
