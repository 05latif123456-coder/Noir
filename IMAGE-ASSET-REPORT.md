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

## صور أطباق ومشروبات صفحة Menu

هذه الأصول مخصصة لتوليد صور منفصلة لكل طبق أو مشروب في صفحة القائمة. يبدأ ترقيمها من `11.webp` لأن الصور من `01.webp` إلى `10.webp` محجوزة للمشاهد الرئيسية والتحريرية.

## IMAGE 11

- مكان الاستخدام: صفحة القائمة → Entrées → Huître Gillardeau, feuille de figuier
- وصف الصورة: طبق افتتاحي راقٍ يحتوي على محارة Gillardeau واحدة أو اثنتين داخل صدفة طبيعية فوق قاعدة حجرية داكنة أو ملح رطب. يجب أن يظهر زيت ورق التين بلمعة خضراء خفيفة، مع شرائح تفاح أخضر صغيرة ونقاط من الكريمة الطازجة المدخنة. التكوين هادئ وغير مزدحم، والمحارة هي مركز الصورة مع فراغ حولها. الإضاءة جانبية ناعمة ودافئة من جهة واحدة، مع ظلال باردة وخلفية فحمية. تجنب الليمون الأصفر التقليدي، الثلج المفرط، الزخرفة البحرية الواضحة، الشعارات، النصوص، والألوان المشبعة.
- Prompt التوليد: `Editorial fine-dining food photograph of a Gillardeau oyster in its natural shell on a dark charcoal stone plate, delicate fig-leaf oil, tiny green apple slices, small dots of smoked creme fraiche, restrained French tasting-menu composition, generous negative space, soft warm side light, cool graphite shadows, realistic wet oyster texture, muted green accents, no lemon wedge, no excessive ice, no logo, no text, no hands, premium restaurant campaign photography, 4:5 portrait, 85mm macro lens, shallow controlled depth of field.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"11.webp"`
- المسار: `"/public/images/11.webp"`

## IMAGE 12

- مكان الاستخدام: صفحة القائمة → Entrées → Betterave brûlée
- وصف الصورة: شمندر Chioggia مشوي أو محروق من الخارج ومقطع إلى قطع هندسية طبيعية، موضوع على طبق خزفي فاتح فوق خلفية داكنة. تظهر خطوط الشمندر الداخلية بوضوح، مع نقاط خل الكشمش الأسود، ملعقة صغيرة من خثارة جبن الماعز المعتق، وفتات خبز الجاودار. الإضاءة دافئة ومنخفضة لتبرز لمعان الشمندر وملمس الجبن. تجنب جعل الطبق يبدو كسلطة، وتجنب الخضروات العشوائية أو اللون الأحمر الفاقع أو التقديم المزدحم.
- Prompt التوليد: `Premium contemporary French dish photography of charred Chioggia beetroot cut into elegant natural wedges, pale ceramic plate on a dark stone table, visible pink and white beet rings, blackcurrant vinegar dots, aged goat curd, delicate rye crumbs, restrained geometric plating, warm low candlelight, deep charcoal background, tactile roasted texture, no salad leaves, no extra vegetables, no logo, no text, no cutlery, cinematic editorial food photography, 4:5 portrait, 85mm lens.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"12.webp"`
- المسار: `"/public/images/12.webp"`

## IMAGE 13

- مكان الاستخدام: صفحة القائمة → Entrées → Langoustine, safran froid
- وصف الصورة: ذيل لانغوستين نيئ أو مطهو بخفة، مرتب بعناية فوق طبق أبيض أو رمادي فاتح، مع طبقة أو بركة رقيقة من مرق الزعفران البارد. تضاف حبيبات لقاح الشمر ولمسات صغيرة من finger lime كأنها قطرات حمضية. يجب أن تبدو الصورة منعشة، دقيقة، باردة بصريًا، مع ألوان عاجية وزعفرانية وذهبية خافتة. تجنب المبالغة في اللون الأصفر، الصلصات السميكة، المأكولات البحرية المتعددة، والديكور البحري.
- Prompt التوليد: `Cinematic fine-dining photograph of a lightly cured langoustine tail arranged with precision on a pale stone plate, a thin pool of chilled saffron consommé, tiny fennel pollen, delicate finger lime pearls, ivory and muted saffron palette, cool clean daylight mixed with one soft warm highlight, elegant negative space, realistic translucent seafood texture, no shellfish pile, no thick sauce, no nautical props, no logo, no text, 4:5 portrait, macro editorial restaurant photography.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"13.webp"`
- المسار: `"/public/images/13.webp"`

## IMAGE 14

- مكان الاستخدام: صفحة القائمة → Entrées → Pigeon en deux temps
- وصف الصورة: طبق حمامة فرنسية مقدمة على مرحلتين بصريًا: صدر صغير وردي اللون مع قطعة فخذ مضغوطة مرتبة بجانبه، مع هريس أو شرائح سفرجل، نقاط فلفل وردي، وخط رفيع من الصلصة الصافية. يجب أن يكون الطبق داكنًا وأنيقًا مع ألوان بنية وتوتية وخشب دافئ. الإضاءة جانبية درامية لكنها تظهر نضج اللحم وملمسه. تجنب الدم الظاهر، القطع الكبيرة، مظهر الصيد الخام، العظام المبعثرة، والصلصة الثقيلة.
- Prompt التوليد: `High-end French tasting-menu photograph of pigeon served in two preparations, a small rosy roasted breast with a neatly pressed leg portion, quince puree and quince slices, pink pepper, a clear glossy jus line, dark ceramic plate on charcoal stone, moody warm side lighting, burgundy and walnut tones, refined restrained composition, no blood, no scattered bones, no hunting props, no text, no logo, realistic food texture, 4:5 portrait, 85mm lens.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"14.webp"`
- المسار: `"/public/images/14.webp"`

## IMAGE 15

- مكان الاستخدام: صفحة القائمة → Plats → Merlu de ligne, algue nori
- وصف الصورة: قطعة سمك merlu مطهوة بلطف، سطحها أبيض لامع وحوافها ذهبية خفيفة، فوق صلصة beurre blanc بنكهة النوري. حولها رماد كراث ناعم، أعشاب بحرية خضراء، وربما ورقة نوري صغيرة موضوعة كعنصر معماري. طبق خزفي رمادي فاتح، خلفية داكنة، إضاءة جانبية باردة مع لمسة دافئة. تجنب السمك المقلي، التقديم الشعبي، الليمون، والصلصات الملونة بشدة.
- Prompt التوليد: `Contemporary French fine-dining photograph of a line-caught hake fillet, gently cooked with a glossy pearly surface and lightly golden edges, nori beurre blanc, fine leek ash, delicate sea herbs, one restrained piece of nori, pale grey ceramic plate on dark stone, cool side light with a subtle candle warmth, minimal architectural plating, no fried fish, no lemon, no readable text, no logo, 4:5 portrait, premium editorial food photography.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"15.webp"`
- المسار: `"/public/images/15.webp"`

## IMAGE 16

- مكان الاستخدام: صفحة القائمة → Plats → Canard de Challans
- وصف الصورة: صدر بط من Challans محمر بجلد مقرمش وبداخله وردي، مقطع إلى شرائح مرتبة، بجانبه كرز مخمر داكن، لمسات من الثوم الأسود وأوراق مرة خضراء. يجب أن يكون التكوين غنيًا لكن قليل العناصر، مع طبق خزفي أسود أو رمادي وخلفية ليلية. استخدم ضوءًا دافئًا يبرز الجلد اللامع وعمق الكرز. تجنب البط المحروق، الصلصة الحمراء الكثيرة، الفواكه الزائدة، والمظهر الريفي الثقيل.
- Prompt التوليد: `Luxury contemporary French food photograph of roasted Challans duck breast sliced into precise rosy pieces, crisp lacquered skin, fermented dark cherries, small black garlic accents, bitter green leaves, black ceramic plate, deep nocturnal charcoal background, warm directional candlelight highlighting the duck skin, refined sparse plating, no excessive sauce, no rustic clutter, no logo, no text, 4:5 portrait, 85mm lens, cinematic restaurant campaign style.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"16.webp"`
- المسار: `"/public/images/16.webp"`

## IMAGE 17

- مكان الاستخدام: صفحة القائمة → Plats → Céleri-rave braisé
- وصف الصورة: قطعة كبيرة من جذور الكرفس المطهو ببطء حتى يصبح سطحها محمرًا، موضوعة فوق كريمة قش محترق ناعمة، مع الجوز المحمص وشرائح دقيقة من الكمأة الشتوية. يجب أن يقدم الطبق كطبق فاخر مستقل لا كخضار جانبي، مع ألوان عاجية وبنية وفحمية. إضاءة ناعمة دافئة وملمس واضح للكرفس والجوز. تجنب إضافة لحم، الخضروات الملونة الكثيرة، الكمأة المبالغ فيها، أو التقديم المنزلي.
- Prompt التوليد: `Elegant vegetarian fine-dining photograph of a slow-braised celeriac centerpiece with a lightly caramelized exterior, resting on smooth burnt hay cream, toasted walnut pieces and a few thin winter truffle shavings, pale stone plate on a dark mineral table, ivory, walnut and charcoal palette, soft warm directional light, luxurious minimal composition, no meat, no colorful garnish overload, no rustic home-style presentation, no logo, no text, 4:5 portrait.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"17.webp"`
- المسار: `"/public/images/17.webp"`

## IMAGE 18

- مكان الاستخدام: صفحة القائمة → Plats → Agneau de lait, ail noir
- وصف الصورة: قطعة لحم حمل صغير مطهوة بعناية، مقطعة إلى شرائح سميكة أو قطعة واحدة مصقولة، مع هريس أو لمسات من الثوم الأسود، أنشوجة دقيقة محفوظة، وشرائح ليمون مصير. التكوين يجب أن يكون ناضجًا وداكنًا، مع ألوان بنية وذهبية وخضراء قليلة. الإضاءة الجانبية تظهر عصارة اللحم دون أن يبدو نيئًا. تجنب العظام الكبيرة، الصلصة الكثيرة، المظهر المشوي العشوائي، والليمون الطازج الأصفر.
- Prompt التوليد: `Moody contemporary French fine-dining photograph of milk-fed lamb, a perfectly roasted thick cut with a deep caramelized edge, black garlic puree, delicate anchovy accents, preserved lemon pieces, dark stone plate, restrained green herbs, warm side light, rich walnut and charcoal palette, precise modern plating, no large bones, no excessive sauce, no raw appearance, no fresh yellow lemon wedge, no logo, no text, 4:5 portrait.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"18.webp"`
- المسار: `"/public/images/18.webp"`

## IMAGE 19

- مكان الاستخدام: صفحة القائمة → Desserts → Poire · verjus · poivre long
- وصف الصورة: حبة كمثرى مسلوقة أو قطعة كمثرى بيضاء مصقولة، فوق جرانيتا verjus فاتحة، مع مرنغ رقيق بنكهة الفلفل الطويل. يجب أن يكون الطبق باردًا ونقيًا بصريًا، على خزف أبيض أو رمادي، مع قطرات شفافة وتفاصيل دقيقة. استخدم ضوءًا فضيًا ناعمًا مع خلفية فحمية. تجنب ألوان الحلوى الزاهية، الكريمة الثقيلة، الشوكولاتة، والزخارف المبالغ فيها.
- Prompt التوليد: `Refined French dessert photography of a poached pear arranged with pale verjus granita and delicate long-pepper meringue, white and translucent textures, elegant pale ceramic plate on a charcoal stone table, cool silver daylight with one subtle warm highlight, minimal quiet composition, crisp frozen granita detail, no chocolate, no heavy cream, no bright artificial colors, no logo, no text, 4:5 portrait, premium editorial food photography.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"19.webp"`
- المسار: `"/public/images/19.webp"`

## IMAGE 20

- مكان الاستخدام: صفحة القائمة → Desserts → Chocolat noir, huile d’olive
- وصف الصورة: حلوى شوكولاتة داكنة 70% في شكل crémeux صغير أو كتلة ناعمة منحوتة، مع لمعان خفيف من زيت Arbequina، فتات حنطة سوداء مقرمش، وربما نقطة زيت واضحة. يجب أن تكون الصورة عميقة ومظلمة وفاخرة دون مبالغة، مع خلفية حجرية سوداء وضوء دافئ ضيق. تجنب الفراولة، الصلصات الملونة، مسحوق الكاكاو العشوائي، الكريمة المخفوقة، والنصوص.
- Prompt التوليد: `Dark elegant French dessert photograph of a 70 percent dark chocolate cremeux, sculpted as a small smooth understated mound, Arbequina olive oil glistening in a few precise drops, buckwheat crisp scattered with restraint, matte black ceramic plate, charcoal stone background, narrow warm candlelight, deep chocolate and copper tones, no berries, no whipped cream, no colorful sauce, no logo, no readable text, 4:5 portrait, cinematic premium restaurant photography.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"20.webp"`
- المسار: `"/public/images/20.webp"`

## IMAGE 21

- مكان الاستخدام: صفحة القائمة → Desserts → Millefeuille de saison
- وصف الصورة: قطعة millefeuille واحدة بطبقات عجين مورقة واضحة، حشوة فانيلا ناعمة، حليب محمص، وقطع فاكهة موسمية قليلة. يجب أن يكون القطع هندسيًا وأنيقًا مع حواف ذهبية خفيفة، فوق طبق حجري فاتح وخلفية داكنة. الإضاءة دافئة من الجانب لتظهر الطبقات والفتات. تجنب الكريمة الزائدة، السكر البودرة الكثيف، ألوان الفاكهة الصارخة، وشكل الحلويات التجارية.
- Prompt التوليد: `Contemporary French millefeuille dessert, one precise rectangular portion with clearly visible crisp laminated pastry layers, smooth vanilla cream, toasted milk accents and a few seasonal fruit pieces, pale stone plate against a dark charcoal background, warm side lighting revealing the flaky layers, restrained editorial luxury, no excessive cream, no heavy powdered sugar, no commercial bakery styling, no logo, no text, 4:5 portrait.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"21.webp"`
- المسار: `"/public/images/21.webp"`

## IMAGE 22

- مكان الاستخدام: صفحة القائمة → Fromages → Le chariot de la cave
- وصف الصورة: عربة جبن صغيرة أو لوح تقديم أنيق يحتوي على خمسة أنواع جبن معتقة مختلفة بوضوح في الشكل والقشرة واللون، مع سكين واحد، قطعة خبز ريفي رفيعة، ومرافقة بسيطة مثل العنب الداكن أو مربى خفيف. يجب أن تبدو الصورة كاختيار ليلي من بيت فرنسي راقٍ، بإضاءة دافئة وخلفية داكنة. تجنب ازدحام الجبن، اللوحات الريفية المبالغ فيها، المكسرات الكثيرة، الملصقات أو الكتابة.
- Prompt التوليد: `Editorial French cheese course photograph featuring a refined small cheese trolley or dark serving board with five distinct aged cheeses, varied natural rinds and textures, one elegant cheese knife, a thin slice of country bread, minimal dark grapes and a restrained preserve, warm candlelight, dark walnut and charcoal setting, sophisticated after-hours restaurant mood, no labels, no readable text, no clutter, no oversized rustic board, 4:5 portrait.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"22.webp"`
- المسار: `"/public/images/22.webp"`

## IMAGE 23

- مكان الاستخدام: صفحة القائمة → Boissons → Accord sans détour
- وصف الصورة: أربع كؤوس صغيرة مختلفة الارتفاع تحتوي على ألوان نبيذ متدرجة، مرتبة كرحلة تذوق هادئة على طاولة حجرية داكنة. يجب أن تكون الكؤوس رفيعة ونظيفة، مع انعكاسات شمعة خافتة وخلفية سوداء غير واضحة. لا تظهر زجاجات أو ملصقات؛ التركيز على الضوء والشفافية والتدرج اللوني. تجنب جعلها صورة إعلان خمور أو إضافة نصوص وعلامات تجارية.
- Prompt التوليد: `Premium restaurant pairing photography of four elegant tasting glasses arranged as a quiet progression on a dark mineral table, subtle variations of pale white, amber and deep red wine, thin glass stems, soft candle reflections, blurred charcoal dining room in the background, cinematic after-hours atmosphere, no bottles, no labels, no logos, no readable text, no hands, restrained editorial composition, 4:5 portrait, shallow depth of field.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"23.webp"`
- المسار: `"/public/images/23.webp"`

## IMAGE 24

- مكان الاستخدام: صفحة القائمة → Boissons → Accord nocturne
- وصف الصورة: ست كؤوس تذوق مرتبة في خط أو قوس بسيط، تبدأ بدرجات بيضاء فاتحة وتنتهي بدرجات حمراء عميقة، مع أجواء ليلية أكثر كثافة من الصورة السابقة. يجب أن ينعكس ضوء نحاسي صغير على الزجاج، مع سطح خشبي داكن وخلفية مطعم غير واضحة. لا تظهر زجاجات أو أسماء نبيذ. تجنب المظهر الاحتفالي الصاخب أو الكؤوس الممتلئة جدًا.
- Prompt التوليد: `Moody fine-dining wine pairing photograph of six delicate tasting glasses arranged in a subtle arc, moving from pale Jura-style white wine tones to deep old-vine red, dark walnut table, one restrained oxidized copper reflection, soft candlelight, blurred nocturnal restaurant background, quiet sophisticated composition, no bottles, no labels, no logos, no readable text, no party atmosphere, no overflowing glasses, 4:5 portrait, cinematic editorial photography.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"24.webp"`
- المسار: `"/public/images/24.webp"`

## IMAGE 25

- مكان الاستخدام: صفحة القائمة → Boissons → Thé fumé au pin
- وصف الصورة: كوب خزفي صغير أو فنجان شاي داكن يحتوي على شاي دافئ بلون كهرماني خفيف، إلى جانبه أطراف صنوبر خضراء، أوراق غار، ولمسة ليمون verbena. يتصاعد بخار رقيق جدًا فوق الكوب، مع سطح حجري داكن وضوء شمعة جانبي. يجب أن تكون الصورة هادئة وعطرية بصريًا، دون تحويلها إلى مشهد غابة أو مشروب أعشاب منزلي. تجنب أكياس الشاي، السكر، الملاعق اللامعة، والكتابة.
- Prompt التوليد: `Atmospheric French restaurant tea photograph of a small matte dark ceramic cup filled with warm amber smoked pine tea, a few fresh pine tips, bay leaf and lemon verbena arranged with restraint, an almost invisible thread of steam, dark mineral stone surface, soft side candlelight, charcoal and muted green palette, intimate after-dinner mood, no tea bag, no sugar, no shiny spoon, no forest scene, no logo, no text, 4:5 portrait, realistic premium editorial food photography.`
- نسبة الأبعاد: 4:5
- الدقة المقترحة: 1600×2000
- اسم الملف: `"25.webp"`
- المسار: `"/public/images/25.webp"`

---

## ملاحظات التنفيذ

- جميع المسارات المستخدمة في التطبيق تبدأ من `/images/` لأن مجلد `public/` هو جذر الملفات الثابتة في Vite. لذلك يوضع الملف فعليًا مثلًا في `public/images/01.webp` ويُستدعى داخل التطبيق من `/images/01.webp`.
- الصورة 01 تستخدم كخلفية قسم The Night Index مع حركة تمرير sticky؛ تبقى الخلفية ثابتة أثناء مرور محتوى القسم ثم تتحرر عند نهايته.
- الصورة 02 تستخدم كخلفية للمشهد السينمائي في الصفحة الرئيسية.
- الصور من 03 إلى 07 تستخدم داخل شبكة المعرض.
- الصورة 08 تستخدم في بداية صفحة من نحن.
- الصورة 09 تستخدم في قسم اللمسة بجانب اقتباس الشيف.
- الصورة 10 تستخدم كخلفية جوية مشتركة لعناوين صفحات القائمة ومن نحن والحجز.
- الصور من 11 إلى 25 مخصصة لصور الأطباق والمشروبات في صفحة Menu، ويمكن ربطها لاحقًا ببطاقات العناصر أو صفحات التفاصيل حسب طريقة العرض النهائية.
- الفيديو الافتتاحي ليس صورة، ومساره المستقل هو `public/video/noir-entry.mp4`، لذلك لا يدخل ضمن ترقيم الصور.
- الدائرة الموجودة في قسم الاقتباس، الخطوط، الحلقات، والانتقالات البصرية عناصر CSS وليست صورًا منفصلة، لذلك لا تحتاج ملفات إضافية.
- يفضل حفظ الملفات بصيغة WebP، من دون نصوص مدمجة داخل الصورة، ومن دون شعارات أو علامات مائية مولدة داخل الصورة.
- أصول `From Market to Memory` من 26 إلى 31 موثقة في `NOIR-MARKET-MEMORY-ASSET-REPORT.md`، وأصول `The Window Mode` من 32 إلى 34 موثقة في `NOIR-WINDOW-MODE-ASSET-REPORT.md`.
