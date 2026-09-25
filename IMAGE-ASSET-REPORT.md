# تقرير أصول الصور — NOIR

هذا التقرير يحدد جميع الصور التي يحتاجها الموقع لكي تستبدلها بصور مولدة بالذكاء الاصطناعي. لم يعد الموقع يعتمد على روابط صور خارجية أو صور مخزون جاهزة. كل الصور مرتبطة بمسارات محلية ثابتة داخل `public/images/`.

تم وضع الصور المولدة داخل المشروع بالأسماء والمسارات المحددة أدناه. إذا استُبدلت أي صورة أو حُذفت مستقبلًا، ستظهر ألوان مؤقتة هادئة بدل الصورة المفقودة حتى يبقى التخطيط قابلًا للعرض.

## خريطة الملفات السريعة

- IMAGE 01 → `01.webp` → `/public/images/01.webp`
- IMAGE 02 → `02.webp` → `/public/images/02.webp`
- IMAGE 03 → `03.webp` → `/public/images/03.webp`
- IMAGE 04 → `04.webp` → `/public/images/04.webp`
- IMAGE 05 → `05.webp` → `/public/images/05.webp`
- IMAGE 06 → `06.webp` → `/public/images/06.webp`
- IMAGE 07 → `07.webp` → `/public/images/07.webp`
- IMAGE 08 → `08.webp` → `/public/images/08.webp`
- IMAGE 09 → `09.webp` → `/public/images/09.webp`
- IMAGE 10 → `10.webp` → `/public/images/10.webp`

---

## IMAGE 01

- مكان الاستخدام: الصفحة الرئيسية → خلفية قسم The Night Index / اختيار مزاج المساء
- وصف الصورة: صورة سينمائية واسعة لصالة مطعم فرنسي معاصر في باريس ليلًا. يجب أن تظهر طاولات قليلة مرتبة بمسافات مريحة، حجر داكن أو جدران إسمنتية ناعمة، خشب جوز داكن، كراسي هادئة، شموع منخفضة، ومصدر ضوء دافئ بعيد. يجب أن تحتمل الصورة وضع طبقة ظل فوقها ونصوصًا بيضاء فوق المساحة الوسطى، مع تفاصيل كافية لتشعر بأن القسم يعيش داخل غرفة حقيقية. يجب أن تبدو الصالة حميمة وراقية وغير مزدحمة. استخدم ظلالًا عميقة وتباينًا منخفضًا، مع لمسات بسيطة من النحاس والشمعة. تجنب الأشخاص الواضحين، الشعارات، الكتابة، الزخارف الفاخرة المبالغ فيها، اللون الذهبي اللامع، والإضاءة التجارية الساطعة.
- Prompt التوليد: `Cinematic wide-angle editorial photograph of an intimate contemporary French fine-dining restaurant in Paris at night, dark mineral stone walls, deep walnut tables, quiet linen settings, a few low candles, subtle oxidized copper details, layered architectural shadows, generous negative space in the upper and central frame for typography, no visible logos, no readable text, no crowded guests, restrained luxury, realistic film grain, cool charcoal and warm candlelight palette, 35mm lens, deep atmospheric contrast, premium restaurant campaign photography.`
- نسبة الأبعاد: 16:9
- الدقة المقترحة: 2400×1350
- اسم الملف: `"01.webp"`
- المسار: `"/public/images/01.webp"`

## IMAGE 02

- مكان الاستخدام: الصفحة الرئيسية → مشهد المطبخ السينمائي بين أقسام الصفحة
- وصف الصورة: لقطة أفقية واسعة داخل مطبخ NOIR أثناء لحظة عمل حقيقية. يظهر الشيف أو يدا الشيف وهو ينهي طبقًا بعناية، مع سطح عمل داكن، أدوات قليلة، بخار خفيف أو انعكاس ضوء على المعدن، وخلفية مطبخ غير واضحة. يجب أن تكون الحركة اليدوية هي مركز الصورة، وأن يترك الجانب الأيسر أو السفلي منطقة أغمق للنص الأبيض. الجو هادئ ومركز وليس صاخبًا. تجنب وضعية الشيف الدعائية، الابتسامات المصطنعة، قبعات الطهاة البيضاء التقليدية، الفوضى، الشعارات، والنصوص.
- Prompt التوليد: `Documentary editorial photograph of a contemporary French chef finishing a tasting-menu plate in a low-lit professional kitchen, hands and precise gesture in focus, dark stone pass, restrained stainless steel reflections, subtle steam, cool shadows with a warm practical light, composition leaving a darker negative-space area for white copy, authentic concentration, no posed portrait, no smile, no logos, no readable text, premium restaurant campaign photography, 50mm lens, shallow but controlled depth of field.`
- نسبة الأبعاد: 3:2
- الدقة المقترحة: 2400×1600
- اسم الملف: `"02.webp"`
- المسار: `"/public/images/02.webp"`

## IMAGE 03

- مكان الاستخدام: الصفحة الرئيسية → المعرض → صورة الصالة
- وصف الصورة: صورة تحريرية للصالة من زاوية أقرب وأكثر تفصيلًا من الصورة الافتتاحية. ركز على طاولة مضاءة بشمعة، حافة حجرية، قماش كتاني، أو تتابع معماري يقود العين إلى عمق الصورة. يجب أن تكون الصورة قابلة للقص في شبكة المعرض مع بقاء مركز الاهتمام واضحًا. استخدم أسودًا فحميًا، رماديًا معدنيًا، وبقعة ضوء كهرمانية صغيرة. تجنب تكرار تكوين الصورة الافتتاحية، ازدحام الطاولات، الزخارف الكلاسيكية، والديكور الفندقي العام.
- Prompt التوليد: `Editorial interior photograph of a refined contemporary Parisian restaurant dining room after dark, one intimate candlelit table in the foreground, dark limestone, pale linen, walnut, a quiet architectural perspective leading into shadow, minimal tableware, charcoal and muted amber palette, sophisticated negative space, no guests in focus, no logos, no readable text, tactile realistic materials, luxury hospitality magazine photography, 45mm lens.`
- نسبة الأبعاد: 4:3
- الدقة المقترحة: 1600×1200
- اسم الملف: `"03.webp"`
- المسار: `"/public/images/03.webp"`

## IMAGE 04

- مكان الاستخدام: الصفحة الرئيسية → المعرض → صورة الطبق
- وصف الصورة: طبق معاصر مصور من أعلى أو بزاوية شبه علوية، يحتوي على مكونات موسمية مرتبة بدقة غير متكلفة. يجب أن يظهر الطبق على خزف فحمي أو حجري، مع صلصة داكنة، عنصر نباتي واحد أو اثنين، ومساحات فارغة حول الطبق. الصورة يجب أن تبدو كجزء من تجربة تذوق راقية لا كصورة وصفة منزلية. تجنب الألوان الصارخة، الزينة الزائدة، أدوات المائدة الكثيرة، النصوص، الشعارات، والطبق المتماثل بشكل مصطنع.
- Prompt التوليد: `Overhead editorial food photograph of an experimental contemporary French fine-dining plate, seasonal vegetables arranged with quiet geometric precision, dark sauce, one delicate herb, matte charcoal ceramic, stone tabletop, soft directional side light, bone, green and muted copper tones, generous negative space, no cutlery, no text, no logo, no excessive garnish, Michelin-level restaurant magazine photography, realistic texture, controlled shallow depth of field.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"04.webp"`
- المسار: `"/public/images/04.webp"`

## IMAGE 05

- مكان الاستخدام: الصفحة الرئيسية → المعرض → صورة السوق والمكونات
- وصف الصورة: طبيعة صامتة قريبة لمكونات موسمية طازجة فوق حجر داكن. يمكن أن تظهر أوراق خضراء، أعشاب عطرية، قشرة حمضيات، فطر، أو خضروات صغيرة، لكن لا تجمع كل العناصر في مشهد مزدحم. يجب أن يشعر المشاهد بملمس الرطوبة والحجر والقماش، مع ضوء بارد يشبه ضوء الصباح قبل افتتاح السوق. اترك بعض الفراغ البصري ليبقى التكوين تنفسيًا. تجنب العبوات، البلاستيك، الملصقات، الألوان الصناعية، وترتيب متجر البقالة.
- Prompt التوليد: `Close editorial still life of seasonal French market ingredients on dark limestone, young green leaves, aromatic herbs, one citrus peel and a few imperfect vegetables, a folded natural linen edge, cool early-morning window light, tactile moisture, mineral grey and lichen green palette, sparse asymmetrical composition, no packaging, no labels, no logos, no plastic, no readable text, contemporary chef's table art direction, 85mm macro lens.`
- نسبة الأبعاد: 4:3
- الدقة المقترحة: 1600×1200
- اسم الملف: `"05.webp"`
- المسار: `"/public/images/05.webp"`

## IMAGE 06

- مكان الاستخدام: الصفحة الرئيسية → المعرض → صورة الحركة أو اللمسة الأخيرة
- وصف الصورة: مشهد قريب لشيف أو ليدين وهما يضعان آخر عنصر على طبق. لا نريد صورة شخصية مباشرة؛ نريد لحظة واثقة، دقيقة، وتلقائية. يجب أن يظهر جزء من الطبق وسطح العمل مع عمق مجال ضحل، بينما تتلاشى الخلفية إلى ظلال خضراء وفحمية. استخدم إضاءة جانبية دافئة تبرز ملمس اليد والطبق من دون مبالغة. تجنب القفازات البلاستيكية، الفوضى، الحركة المشوشة، الوجوه المبتسمة، والشعور الإعلاني التقليدي.
- Prompt التوليد: `Intimate documentary photograph of a chef's hands placing the final herb on a contemporary French tasting-menu plate, a fragment of the dish and dark stone pass visible, shallow depth of field, warm side light on the gesture, cool charcoal and muted green background, precise and unposed, tactile food texture, no plastic gloves, no clutter, no smiling portrait, no logos, no readable text, refined culinary editorial photography, 70mm lens.`
- نسبة الأبعاد: 3:2
- الدقة المقترحة: 1800×1200
- اسم الملف: `"06.webp"`
- المسار: `"/public/images/06.webp"`

## IMAGE 07

- مكان الاستخدام: الصفحة الرئيسية → المعرض → صورة التفاصيل
- وصف الصورة: صورة ماكرو لجزء صغير جدًا من طبق معاصر: سطح صلصة لامع، حافة خزف، ورقة عشبة، أو ملمس مكون واحد. يجب أن تكون الصورة غامضة ومغرية، لا أن تشرح الطبق بالكامل. اجعل مجال التركيز ضيقًا لكن واضحًا، مع خلفية شبه سوداء ومساحة هادئة حول التفاصيل. تجنب الازدحام، الألوان الفاقعة، البخار المبالغ، وأي نص أو شعار.
- Prompt التوليد: `Macro editorial photograph of a mysterious contemporary French tasting-menu detail, glossy dark sauce, one precise herb and a barely visible matte porcelain edge, near-black background, low directional candlelight, narrow but intentional focus plane, restrained drama, charcoal, cocoa and muted green palette, no text, no logo, no excessive garnish, Michelin-level food photography, 100mm macro lens, realistic fine grain.`
- نسبة الأبعاد: 4:3
- الدقة المقترحة: 1600×1200
- اسم الملف: `"07.webp"`
- المسار: `"/public/images/07.webp"`

## IMAGE 08

- مكان الاستخدام: صفحة من نحن → الصورة الافتتاحية التحريرية
- وصف الصورة: صورة عمودية نسبيًا لصالة NOIR من منظور معماري هادئ. يجب أن تظهر العلاقة بين الجدار الحجري الداكن، الخشب الفاتح، الكتان، الضوء المنخفض، والمساحات الفارغة. لا تجعلها نسخة من صورة الصالة في المعرض؛ اجعلها أكثر تأملًا وأقل احتواءً على الطاولات، كأنها صفحة من مجلة معمارية. يجب أن تكون هناك مناطق ظل تسمح بتجاور الصورة مع النص الكبير. تجنب المبالغة في الفخامة، النوافذ المضيئة جدًا، الأشخاص الواضحين، والشعارات.
- Prompt التوليد: `Architectural editorial photograph of the interior of a small contemporary French restaurant in Paris, tall vertical composition, dark plaster and limestone, pale oak, linen, one restrained copper light reflection, quiet empty passage between tables, layered shadows, contemplative luxury, no visible branding, no readable text, no guests in focus, realistic interior magazine photography, 50mm lens, low contrast film color grade.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"08.webp"`
- المسار: `"/public/images/08.webp"`

## IMAGE 09

- مكان الاستخدام: صفحة من نحن → قسم اللمسة → الصورة الكبيرة بجانب اقتباس الشيف
- وصف الصورة: لقطة أفقية قريبة ليدَي الشيف أثناء إنهاء طبق، أو لجزء من الجسم أثناء العمل، مع ترك مساحة هادئة في أحد الجانبين للنص. ينبغي أن تبدو الصورة إنسانية وحرفية، وأن توضح العلاقة بين اليد والطبق والأداة. استخدم ضوءًا دافئًا ناعمًا فوق السطح مع خلفية داكنة غير واضحة. تجنب الظهور الكامل للوجه، المشهد المزدحم، القفازات الصناعية، واللمسات الرقمية غير الواقعية.
- Prompt التوليد: `Cinematic close editorial photograph of a contemporary French chef's hands finishing a delicate plate, one small plating tool, dark stone work surface, warm soft overhead light, deep unfocused kitchen shadows, composition with quiet negative space on one side for an adjacent quote, tactile human gesture, no full face, no plastic gloves, no logos, no readable text, natural skin and food texture, restrained Parisian fine-dining campaign photography.`
- نسبة الأبعاد: 3:2
- الدقة المقترحة: 1800×1200
- اسم الملف: `"09.webp"`
- المسار: `"/public/images/09.webp"`

## IMAGE 10

- مكان الاستخدام: صفحات القائمة ومن نحن والحجز → الخلفية الجوية لشريط العنوان العلوي
- وصف الصورة: خلفية تجريدية هادئة ومظلمة يمكن استخدامها خلف عناوين الصفحات الثلاث. لا تحتاج إلى موضوع واضح؛ يكفي ملمس حجر أسود، تدرج ضوء خافت، انعكاس نحاسي بعيد، أو ظل دائري يشبه الضوء على جدار. يجب أن تظل التفاصيل منخفضة جدًا حتى لا تتنافس مع العنوان الكبير والنص. لا تستخدم أشكالًا تقنية، تدرجات نيون، زخارف ذهبية، نصوصًا، شعارات، أو أي عنصر له حواف حادة تشوش القراءة.
- Prompt التوليد: `Abstract atmospheric background for a premium contemporary French restaurant website, dark mineral plaster and soft charcoal stone texture, a very subtle warm oxidized-copper glow entering from one edge, faint circular shadow like a distant pool of light, almost monochrome, generous low-detail negative space for large editorial typography, no objects, no people, no logos, no text, no neon, no gold ornament, cinematic restrained luxury, high-resolution texture photograph.`
- نسبة الأبعاد: 16:9
- الدقة المقترحة: 2400×1350
- اسم الملف: `"10.webp"`
- المسار: `"/public/images/10.webp"`

---

## ملاحظات التنفيذ

- جميع المسارات المستخدمة في التطبيق تبدأ من `/images/` لأن مجلد `public/` هو جذر الملفات الثابتة في Vite. لذلك يوضع الملف فعليًا مثلًا في `public/images/01.webp` ويُستدعى داخل التطبيق من `/images/01.webp`.
- الصورة 01 تستخدم كخلفية متحركة ببطء في القسم الافتتاحي.
- الصورة 02 تستخدم كخلفية للمشهد السينمائي في الصفحة الرئيسية.
- الصور من 03 إلى 07 تستخدم داخل شبكة المعرض.
- الصورة 08 تستخدم في بداية صفحة من نحن.
- الصورة 09 تستخدم في قسم اللمسة بجانب اقتباس الشيف.
- الصورة 10 تستخدم كخلفية جوية مشتركة لعناوين صفحات القائمة ومن نحن والحجز.
- الدائرة الموجودة في قسم الاقتباس، الخطوط، الحلقات، والانتقالات البصرية عناصر CSS وليست صورًا منفصلة، لذلك لا تحتاج ملفات إضافية.
- يفضل حفظ الملفات بصيغة WebP، من دون نصوص مدمجة داخل الصورة، ومن دون شعارات أو علامات مائية مولدة داخل الصورة.
