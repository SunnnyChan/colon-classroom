(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{251:function(t,n,a){"use strict";a.r(n);var e=a(28),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"抽象类型-实中之虚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类型-实中之虚"}},[t._v("#")]),t._v(" 抽象类型——实中之虚")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("具体类型是创建对象的模板，抽象类型是创建类型的模块。\n\n抽象是个相对概念，一个类型是否是抽象的完全取决于设计者对它的角色定位。\n\t如果想用它来创建对象，它就是可实例化的具体类型；\n\t如果想用它来作为其他类型的基类，它就是不可实例化的抽象类型。\n\t\t\n一个是为对象服务的，一个是为类型服务的。\n\t显然，后者的抽象性正是源自其服务对象的抽象性。\n\t如上节中\n\t\t模板方法模式中的Authenticator类是抽象的，是为创建子类型SimpleAuthenticator、Sha1Authenticator等服务的；\n\t\t策略模式中的Authenticator类是具体的，是为创建对象服务的，\n\t\t但它合成的两个接口KeyValueKeeper和Encrypter又是为创建算法类型服务的。\n\n值得注意的是，不要把抽象类型与抽象数据类型（ADT）混为一谈，后者的抽象指的是类型的接口不依赖其实现。\n或者说，抽象数据类型的核心是数据抽象，而抽象类型的核心是多态抽象。\n")])])]),a("ul",[a("li",[t._v("抽象类型概念")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("抽象类型就只有接口（interface）和抽象类（abstract class）两种吗？")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("在Java和C#中基本上是这样，但在C++中这两种类型没有显式的区别。\n此外，动态OOP语言如Ruby、Python、Perl、Scala、Smalltalk等还至少支持mixin和trait中的一种类型。\n\nmixin直译为‘混入’，trait直译为‘特质’。它们的出现是为了弥补接口与抽象类的一些不足，更好地实现代码重用。\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("接口的主要目的是创建多态类型，本身不含任何实现。")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("子类型通过接口继承只能让代码被重用，却无法重用超类型的实现代码。\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("抽象类可以重用代码，可又有多重继承的问题。")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("Java和C#不支持这种机制，C++虽支持但有不少弊端。\n\n合成是一种解决办法，但也不是没有缺陷：\n\t首先，合成的用法不如继承那么简便优雅，这也是许多人喜欢用继承的主要原因；\n\t其次，合成不能产生子类型，而有时这正是设计者所需要的；\n\t再次，合成无法覆盖基础类的方法，也无法访问它的protected成员；\n\t最后，却可能是最大的缺点是：合成的基础类只能是具体类型，不能是抽象类型。\n\t\t具体类型的主要任务是创造新对象，如果用作合成或继承的基础类，等于是又承担了原本抽象类型的任务——创造新类型。\n\t\t这不仅有越俎代庖之嫌，而且这两个任务往往也是冲突的。一个类的服务应该有纯粹性和完备性。\n\t\t\t一方面，人们希望创造的新对象无所不能，因此更看重服务的完备性，倾向它包含尽可能多的功能；\n\t\t\t另一方面，人们又希望创造的新类型有所不依，因此更看重服务的纯粹性，倾向它包含尽可能少的功能。\n\t\t作为抽象类型的接口也有类似的尴尬：\n\t\t  对它的客户类来说，它承诺的服务是多多益善；\n\t\t  对它的实现类来说，承诺越多负担却越重。\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("mixin")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("如果能有这样一种可重用的模块，既不像具体类型那样面面俱到，又不像接口那样有名无实，也没有抽象类的多重继承之弊，岂不妙哉。\n\nmixin 是具体类型与接口类型的一种折衷，既可有抽象方法，也可有具体方法。\n\t这一点类似抽象类，但又没有抽象类的多重继承问题。\n\tRuby中Enumerable，任何包含该mixin的类只要实现一个遍历方法each，便可免费得到二十多个有关遍历和搜寻的方法。\n\t如果再实现比较方法<=>，还可获赠排序和最值方法。相比Java中Enumeration和Iterator接口，优势历然。\n\n为什么称为mixin呢？\n\t冰淇淋中经常会掺混一些薄荷、香草、巧克力之类的调味料和花生、坚果之类的小零碎，人们管它们叫mix-in。\n\t后来被借用来表示一种抽象类型，主要有如下特点：\n\t\t一、抽象性和依赖性：本身没有独立存在的意义，必须融入主体类型才能发挥作用；\n\t\t二、实用性和可重用性：不仅提供接口，还提供部分实现；\n\t\t三、专一性和细粒度性：提供的接口职责明确而单一；\n\t\t四、可选性和边缘性：为主体类型提供非核心的辅助功能。\n\n实现\n  虽然C++、Java和C#在语法上尚不支持mixin，但C++可通过多重继承、Java和C#可通过合成和接口来分别模拟mixin。\n\t不仅如此，借助切面式编程（AOP），Java和C#甚至可完全实现mixin；\n\t借助泛型式编程（GP），C++也能通过模板更好地实现mixin。\n\n编程范式之间的合作性：\n\tmixin属于OOP的范畴，但其他编程范式如切面式、泛型式以及二者背后的元编程都能与之相通；\n\n设计与语言的相关性\n\tC++、Java和C#以及其他诸如Ruby、Python等动态语言对mixin有着不同的支持方式，这在一定程度上会影响系统的OOP设计。\n\tJava的动态小兄弟Groovy在1.6版已经开始支持mixin ，而C#3.0也新引入了对mixin更友好的语法特性。\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("Java/C#的抽象类与接口在语法上的区别")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("C#的语法与Java的稍有不同，但二者在接口与抽象类的关键区别上还是一致的：\n\t接口不能提供实现但能多重继承，抽象类则正相反；\n\t接口只能包含公有的、非静态的、抽象的方法成员，抽象类则无此限制。\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("举例")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("  如果到包子铺买包子，作为客户你也许会认为包子是具体类型，但对提供包子的人来说它却是抽象类型。\n\t他一定会问你：是要肉包、菜包还是豆沙包？是要蒸包、煎包还是小笼包？\n\t他的铺子开得越专业，给你出的选择题越多，众口难调嘛。同样道理，要建一个高度可重用的类库，一些接口是必不可少的。\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("意义")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("接口的意义就在于 提供者不是擅作主张，而是推迟决定，让客户选择实现方式。\n\t\t\t\n抽象类的意义就在于 父类推迟决定，让子类选择实现方式。\n\t‘推迟’二字道出了抽象类型除创建类型之外的另一功用：提供动态节点。\n\t 如果是具体类型，节点已经固定，没有太多变化的余地。\n\t 反过来，要使节点动态化，一般通过多态来实现。由此，抽象类型常常与多态机制形影不离。\n\t\t\t\n以电脑主板作为示例\n\t上面密密麻麻地布满了各种元件，那是它的实部，而我们关注的是它的虚部——各种插槽和接口，\n  包括CPU插槽、内存插槽、PCI插槽、AGP插槽、ATA接口、PS/2接口、USB接口以及其他林林总总的扩展插槽等等。\n\t\n  这些接口的存在，使得主板与CPU、内存条、外围设备以及扩展卡等不必硬性焊接在一起，大大增强了电脑主机的可定制性。\n  主板与其他硬件就好比一个个的具体类型，那些插槽和接口就相当于一个个的接口类型。\n\t\t\n  所有的硬件以接口为桥来组装合成，以机箱为壳来封装隐藏，一个新的具体类型——具有完整功能的主机便产生了。\n\t\t\t\t\n  准确地说，与接口类型对应的不是物理接口，而是接口规范。如果仅仅是物理接口，\n  只能保证该接口适用于某种特定型号的硬件产品，却不能保证同时适用于其他型号或者其他类型的硬件。\n\t以大家熟悉的USB（Universal Serial Bus）接口为例，它能接入各种外部设备，包括鼠标、键盘、打印机、外置硬盘、闪存和形形色色的数码产品。\n\t这当然不是偶然的，因为所有厂家在生产这些硬件时均遵循了相同的业界标准——USB协议规范。\n\t换言之，任何一个与USB接口兼容的设备，都可看作是实现了此接口的具体类型，\n  而主机对该设备的自动识别能力则可看作一种多态机制。\n\t\t\t\t\n  接口继承不是为了重用，而是为了被重用\n\t\t比如一个鼠标，可以有串行接口、PS/2接口、USB接口或者无线接口，还可以同时拥有多个不同类型的接口。\n\t\t无论怎样，它本身都是完整的产品，根本不需要重用主机上的其他硬件，\n\t\t它实现某些接口的目的完全是为了能被主机所用。\n\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("\t相比软件设计师，硬件设计师往往能更好地贯彻OOP的理念\n\t\t他们的对象化概念更清晰更自然，因为硬件模块比软件模块更实在更具体；\n\t\t他们更注重设计，因为硬件比软件的修改成本大得多\n\t  他们更注重设计重用，因为硬件重新发明轮子的成本普遍很高\n\t\t他们更注重实现重用，因为无法在举手之间完成‘复制-粘贴’工作\n\t\t他们更注重接口明确、封装完好，因为把内部的接口或结构暴露在外不仅难看，还容易带来缠绕、磨损、短路等问题；\n\t  他们采用合成和接口来组装模块，因为硬件没有类似实现继承的机制。")]),t._v("\n")])])]),a("ul",[a("li",[t._v("封装&多态")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("广义封装让每个类成为独立的模块，从而让每个对象具备了个体身份。\n狭义封装又进一步地把类的接口与实现分离，从而让每个对象具有显著的外在行为和隐藏的内在特性。\n继承机制可使一个类成为其他类的子类或父类，从而确立了对象在类型家族中的身份。\n\t\t\n一个公民的社会身份是指他在社会中所处的地位和扮演的角色。\n\t比如，一个人在学校里是学生，在公司里是职员，在商店里是顾客，他真正的个体身份往往是被掩盖的。\n\t同样地，一个对象在与外界联系时，通常不以其实际类型的身份出现，而是在不同的场合下以不同的抽象类型的身份出现。\n\t\t\n社会身份既是一种资格也是一种义务\n\t比如在列车上有人得了急病，可以通过广播找医生。人们不用事先知道来者的具体个人身份，只要他是医生，就会放心地让他第一时间去救人\n\t不用事先知道个人身份，不正说明广播呼叫的对象是一个多态的抽象类型吗？\n\n同理，当一个具体类型显式继承了一个接口，它的对象便拥有了个体身份之外社会身份：\n\t有资格以该接口的形式与外界打交道，也有义务履行该接口的职责。\n\t\t\n社会身份归功于多态而不是继承\n\t继承自然有功劳，毕竟子类型多态要建立在它的基础上。\n\t但如果没有多态机制，要确保一个对象的实际方法而不是其超类型的方法被调用，必须将其还原为具体类型，从而使社会身份变得几乎有名无实。\n  对象每多一种社会身份，便多一条与外界交流的渠道。\n\t\n  为什么遮遮掩掩地不肯以本来面目示人呢？\n\t\t非是羞于见人，盖因一般的具体类型在公共场合是不为人知的，只有少数核心库里的核心类是例外。\n    即使侥幸被认识，也难被认可，因为那会以代码的复杂度和耦合度为代价。\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    社会身份则不然，它远比一般的个体身份更容易被接受。\n\t\t这就好比上课得有学生证，上班得有工作证，上火车得有火车票，上飞机得有登机牌。\n\t\t只要不是炙手可热的公众人物，很多场合都是认牌认证不认人的。")]),t._v("\n")])])]),a("ul",[a("li",[t._v("‘针对接口编程’的基本原则")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("它有一种建立于数据抽象之上的形式，能让用户只关心抽象数据类型的API接口而无视其具体实现。\n\t\t\n它至少有两大局限。\n\t其一，虽然在接口不变的情况下，实现代码的改变不会影响客户代码，但仍需要重新编译，对于需要头文件的C++来说则需要更多的编译链接时间。\n\t其二，虽然相同的接口可以有多种实现方法，但它们不能同时并存，更无法动态切换。\n\n于是，另一种建立于多态抽象之上的形式应运而生。它把抽象数据类型隐藏在抽象类型的背后，从而提升了抽象接口。\n\t同一个抽象接口允许有多种实现并存，且能动态切换，新增、删除或修改某种实现也不会导致其他代码的修改或重新编译。\n\t从主体类的角度来看，它的对象尽量以社会身份参与社会活动；\n\t现在再从客户类的角度看，它会尽量召集有社会身份的对象。\n\t两相结合，以社会身份而非个人身份作为公民之间联系的纽带，正是针对接口而非实现来编程的社会现实版。\n")])])]),a("ul",[a("li",[t._v("没有抽象超类型的具体类型最常见的有两种可能")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("一种是与世隔绝，一辈子几乎足不出户，至多在小圈子里活动。典型的有非公有类、内部类、局部类等等。\n一种是名满天下，他的脸就是一张天然名片，他的个人身份也就是社会身份。\n\n典型的有基本数据类型、字符串类型、日期类型等通用数据类型以及特定领域的通用数据类型。\n\n可见，个人身份与社会身份并无绝对的界限。同样，家庭身份与社会身份也有交合之处，正如名门望族也可成为社会身份一样。\n\t因此我们谈到的社会身份，不必拘泥于接口，甚至不必限于抽象类型，\n  关键是该类型是否具备了足够的通用性和规范性、稳定性和独立性、灵活性和专业性。\n\n再拿现实社会说事，每种社会身份都代表了个体与社会缔结的一种契约，它有如下的特点：\n\t独立而稳定——先于个体而存在，且不随个体的变化而变化；\n\t公开而权威——为人所知、为人所信；\n\t规范而开放——制定的协议标准明确，且允许个体在遵守协议的前提下百花齐放。\n\n毫无疑问，推行契约制将使社会大受其惠。\n\t首先，相同身份的个体可相互替换、新型个体可随时加入，而且不会影响整体框架和流程，保证了系统的灵活性和扩展性。\n\t其次，整体不因某一个体的变故而受冲击，保证了系统的稳定性和可靠性；\n\t最后，个体角色清晰、分工明确，保证了系统的规范性和可读性。\n")])])]),a("ul",[a("li",[t._v("每种身份都是规范抽象的结果")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("个体身份对应的规范抽象借助封装，以数据抽象（data abstraction）的形式出现；\n家庭身份对应的规范抽象借助继承，以类型层级（type hierarchy）的形式出现；\n社会身份对应的规范抽象借助多态，以多态抽象（polymorphic abstraction）的形式出现。\n\t\t\n接口可用来代表角色，但角色却不一定要通过接口。\n\t正如你提到的，接口继承是静态的，而角色却可能是动态的。\n\t\t比如学生毕业后变成职员，职员升迁后变成经理等等。\n\t\t对于静态类型语言来说，这类问题的解决单靠接口继承是不够的，还需要利用合成等手段，或者利用前面提到的其他抽象类型如mixin或trait。\n  \n如果对语言规则的理解仅仅停留于语法层面，那么它更多体现为对实现的束缚。\n\t只有提升到语义层面，它才更多体现为对设计的保障。\n\t从语义上看，抽象类与接口的区别，并不比它与具体类的区别小多少。\n")])])]),a("ul",[a("li",[t._v("抽象类型发展")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("开始C++是没有抽象类型的，直到1989年C++ Release 2.0发布前的最后一刻，Bjarne Stroustrup才力排众议引入抽象类。\n\t从C++的前身C with Classes 开始算起，其间已经整整十年了。\n\t即便如此，它的意义在当时仍不为大多数人所认识。\n\t\t推出一个看似小小的语法特征竟会如此艰难，恐怕远远超出诸位的想象吧！有人幻想只通过看语法书就能完全领会语言的精髓，又与痴人说梦何异？\n\n抽象类的出现，让两种不同角色的类在语法上有了明确的界定：\n  具体类描述对象，重在实现；抽象类描述规范，重在接口。\n\t这种分工降低了用户与实现者之间的耦合度，大大减少了代码的维护成本以及编译时间。\n\t\t\n由于抽象类不是为了创建对象，它的实例化自然是没有意义的。\n\t又由于它是接口规范，在子类没有实现其所有规范之前，是不能实例化的，否则规范岂不成了一纸空文？\n\n在没有抽象类的语法之前，要实现类似的功能，唯一的办法是：\n\t在本该抽象的方法被调用时强行中止程序。烦琐丑陋不说，还只能在运行期间捕捉错误。\n\n在纯虚函数（pure virtual function）——相当于Java和C#中的抽象方法——被引入之后，\n任何含有抽象方法的类都是抽象类，编译器将保证它不会被实例化。\n\t从具体类中分离出抽象类是一次质的飞跃，从抽象类中进一步地分离出接口则是另一次飞跃。\n\tJava推出接口类型之时同样饱受质疑，最终还是经受了实践的考验，后又为C#所采纳。\n\t其实最初C++的抽象类是为了定义一组协议并强令各子类遵守，实质上正是Java和C#中的接口所起的作用。\n")])])]),a("ul",[a("li",[t._v("一个抽象类可以没有任何实现，但也随时可以加入实现。接口则不同，永远都不能有实现代码。")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("此乃规范集合所在，杜绝任何自以为是、画蛇添足的实现。\n初看似乎不合常理：这不是自缚手脚、自废武功吗？殊不知自由源于自制。\n\t\t\n许多人为了贪恋一点点代码重用，总忍不住把一些实现放在本该只是规范的地方。\n\t一来，这模糊了规范与实现的界限，背离了接口与实现相分离的设计初衷。\n\t\t要知道，再完美的实现都有改动的余地，将其捆绑到规范中只会增加不稳定因素；\n\t\t再完美的实现也不应该影响其他的实现，先入为主只会降低灵活性。\n\t二来，带有实现的抽象类无法用于合成，必须通过类继承才能起作用，而实现继承的弊端我们已经见识过了。\n\n在有些情况下，规范的实现比较复杂，需要渐进实现，保留一些中间状态的抽象类也是合理的，但最初的接口最好保留。\n\t总不能因为有了模具半成品，就抛弃模具规格吧？\n\t\t\n以Java Collections Framework为例，既规范了Collection、Set、List、Map等接口，又为这些接口提供了抽象类和具体类，\n\t从而给了用户三种选择：直接利用具体类、扩展抽象类、直接实现接口，方便程度递减而灵活程度递增。\n")])])]),a("ul",[a("li",[t._v("为什么以前对接口总有本能的排斥心理？")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("\t满脑子更多想的是怎么让程序工作，而不是想怎么让程序工作得更好。\n  因此更重视代码实现，比较忽视规范设计。\n\t\n  许多人对接口与抽象类的认识之所以模糊不清，\n  原因是他们习惯于从定义和语法中寻找表象的答案，不习惯从本源和语义上进行本质的分析。\n")])])]),a("ul",[a("li",[t._v("Java/C#的抽象类与接口在语义上的区别")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("先从本性上看\n\t接口是一套功能规范集合，因此相同的接口代表相同的功能，\n\t  多表示‘can-do’关系，常用后缀为‘-able’的形容词命名，如Comparable、Runnable、Cloneable等等。\n\t\t\t\n  接口一般表述的是对象的边缘特征，或者说一个对象在某一方面的特征，因此能在本质不同的类之间建立起横向联系。\n\t\t由于一个对象可拥有多方面的角色特征，故而可有多种接口。\n\t\n  与之相对地，抽象类是一类对象的本质属性的抽象，因此相同的抽象基类代表相同的种类，多表示‘is-a’关系，常用名词命名。\n\t\n  抽象类一般表述的是对象的核心特征，只能在本质相同的类之间沿着继承树建立起纵向联系。\n  由于一个对象通常只有一个核心，故而只能有一种基类。\n\n再从目的上看\n\t接口是为了规范重用，让一个规范有多种实现，看重的是可置换性；\n\t抽象类主要是为了代码重用，能逐级分步实现基类的抽象方法，看重的是可扩展性。\n\n演变指的又是什么呢？\n\t演变不属语义范畴，属于语法规则的一个推论。在系统演变过程中，接口与抽象类的表现差异很大。\n\t\n  接口由于是被广泛采用的规范，相当于行业标准，一经确立不能轻易改动。\n\t\t一旦被广泛采用，它的任何改动——包括增减接口、修改接口的签名或规范——将波及整个系统，必须慎之又慎。\n\t\n  抽象类的演变则没有那么困难，一则它在系统中用得没有接口那么广泛，更多地是家庭身份而非社会身份；\n\t\t二则它可随时新增域成员或有默认实现的方法成员，所有子类将自动得以扩充。这是抽象类的最大优点之一。\n  \n  不过接口也有抽象类所不具备的优点，虽然自身难以演化，但很容易让其他类型演化为该接口的子类型。\n\t\t例如，JDK5.0之前的StringBuffer、CharBuffer、Writer和PrintStream本是互不相关的，\n    在引进了接口Appendable并让以上类实现该接口后，它们便有了横向联系，均可作为格式化输出类Formatter的输出目标。\n")])])]),a("ul",[a("li",[t._v("标记接口究竟有什么用？")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("它一个方法都没有，也就谈不上规范，也无法利用多态机制，继承这类接口又有何意义呢？\n一个类型的规范不限于单个的方法，类型整体上也有规范，比如主要目的、适用场合、限定条件、类不变量等等。\n\t\n接口的目的是为了产生多态类型，不能只看到‘多态’而忽略‘类型’。\n\t一个接口哪怕没有一个方法，也是有意义的。\n\t首先，接口是一种类型，有严格的语法保障和明确的语义提示，这也是静态类型的优势所在。\n  让一个具体类继承特定接口，既凸显了设计者的用意，也授予用户针对性地处理该类型的权力。\n\t\t比如java.util.EventListener接口为所有的事件监听器提供了统一的根类型。\n\t\t\t\t\n  其次，有时需要对某些类型提出特殊要求、提供特殊服务或进行特殊处理，而这些并不能通过公有方法来办到，也没有其他有效的语言支持。\n\t\t标记接口可担此任，成为类型元数据（metadata）的载体。\n\t\t如给一个类贴上一个java.io.Serializable的标签，它的对象便能被序列化，具体工作由JVM来完成。\n\t\t用户也可以通过自定义私有的writeObject 、readObject等方法来定制序列化方式。\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    值得指出的是，当标记接口仅仅用于元数据时，更好的办法是采用属性导向式编程（@OP），Java中的annotation、C#中的attribute即作此用。")]),t._v("\n")])])]),a("ul",[a("li",[t._v("OOP")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("\t\t责任——在契约化的公民社会中，最重要的是对自己、对家庭、对社会的责任感。\n\t\t变化——采用封装以防个人之变，慎用继承以防家庭之变，采用多态以防社会之变。\n\t\t分合——数据与运算结合，接口与实现分离。\n\t\t抽象——无论是封装、继承还是多态，都是施诸众对象之上的抽象机制。\n\t\t虚伪——用封装来掩盖内心，用多态来掩盖外表，提倡继承责任却不提倡继承财富！\n")])])]),a("ul",[a("li",[t._v("注：")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("在C++中，如果一个类不含数据只含抽象的成员函数（即pure virtual function），\n则该类有时被称为纯抽象类（pure abstract class），与Java和C#中的interface的功用大致相当。\n\t\t\nC++可利用CRTP（Curiously Recurring Template Pattern）的惯用法来实现mixin。\n\n第一个支持OOP的语言是Simula 67（1967年）。\n\n虽然具体类型有可能被继承，但通常并不提倡。\n\n一些大型系统在引入抽象类后，编译时间少了一个数量级。\n\n接口也可能描述对象的核心特征，但一个类至多一个这样的接口。\n\n由于类继承同时也继承了接口，抽象类也能规范重用，但更侧重代码重用。\n")])])]),a("ul",[a("li",[t._v("总结")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("合成的缺陷\n\t\t用法不如继承优雅；\n\t\t不能产生子类型；\n\t\t无法覆盖基础类的方法，无法访问它的protected成员。\n\t\t不能以抽象类型为基础类\n\n具体类型的矛盾与缺陷\n\t\t作为创造对象的单位，功能越多越好；\n\t\t作为可重用的单位，功能越少越好；\n\t\t不宜被继承。\n\n接口的矛盾与缺陷\n\t\t客户类希望它提供尽可能多的服务；\n\t\t实现类希望尽可能少的实现代码；\n\t\t无法代码重用\n\n抽象类的缺陷\n\t\t接口代码无法重用，多重继承或复杂晦涩或未获支持。\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);