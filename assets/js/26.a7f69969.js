(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{270:function(a,l,s){"use strict";s.r(l);var e=s(28),t=Object(e.a)({},(function(){var a=this,l=a.$createElement,s=a._self._c||l;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"教学计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#教学计划"}},[a._v("#")]),a._v(" 教学计划")]),a._v(" "),s("ul",[s("li",[a._v("迭代学习法")])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("在具体知识和抽象理论之间做折返式学习\n")])])]),s("h1",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[a._v("#")]),a._v(" 数据类型")]),a._v(" "),s("blockquote",[s("p",[a._v("—— 规则与变通")])]),a._v(" "),s("ul",[s("li",[a._v("两个要素")])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("允许取值的范围\n允许参与的运算\n")])])]),s("ul",[s("li",[a._v("意义")])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("物理意义  进行底层的内存分配和数值运算等\n逻辑意义  表达高层的逻辑概念\n")])])]),s("ul",[s("li",[a._v("类型的动静")])]),a._v(" "),s("blockquote",[s("p",[a._v("以类型的绑定时间来区分")])]),a._v(" "),s("ul",[s("li",[s("ul",[s("li",[a._v("动态类型语言")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("数据类型检查发生在运行期间\n不需要显式的变量声明\n\n鸭子类型（duck typing）形式\n动态类型的一种风格\n是一种非继承性的多态形式，即一个对象的类型可以由其接口集合来确定，不需要通过显式的继承\n哲学意义 名义不重要，重要的是能力\n为软件重用开启了新窗口，同时也埋下了一些陷阱\n\n优势\n简明、快捷、灵活，天然具有泛型特征\n易于重用\n适合泛型编程和快速原型开发\n\n动态类型语言类似“疑罪从无”的无罪推定制——在被证明非法之前都是合法的\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("静态类型语言")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("数据类型检查发生在运行之前\n一般需要显式的变量声明，但是有些静态语言也不需要，\n这种情况下编译器会通过上下文做类型推断（type inference），一旦类型被推断后，不再更改\n\n类型推断\n既有动态类型的间接性，也保留了声明式静态类型的安全性\n\n优势\n代码可靠性强，符合“发现错误要尽早”的软件开发原则\n编译器有可能籍此优化机器代码以提升运行效率\n相比动态类型语言，节省了运气在类型检查上花费的时间和空间\n变量类型的声明彰显了编程者的意图，有辅助文档的功效\n\n静态类型语言类似“疑罪从有”的有罪推定制——在被证明合法之前是非法的\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("取舍")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("Static Typing Where Possible, Dynamic Typing When Needed\n尽可能守规则，必要时求变通\n")])])]),s("ul",[s("li",[a._v("类型的强弱")])]),a._v(" "),s("blockquote",[s("p",[a._v("以类型的约束强度来划分")])]),a._v(" "),s("ul",[s("li",[s("ul",[s("li",[a._v("弱类型语言（weakly-typed language）")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("允许一种类型的值隐性转化（强制转换coericion）为另一种类型\nC、JS\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("强类型语言（strongly-typed language）")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("着意贯彻类型控制，为保障数据的完整性和代码的安全有效性，一般不允许隐性类型转换。\n如果一定需要类型转换，都必须是显式转换，一般通过铸型（Cast）来完成\n\n但许多强类型语言对于宽转换（widening conversion）还是允许隐性的，如int在必要时可以转为float\n\nJava、Smalltalk\n")])])]),s("ul",[s("li",[a._v("类型的安全性")])]),a._v(" "),s("blockquote",[s("p",[a._v("类型安全语言（type-safe language） 类型不安全语言（type-unsafe language）")])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("类型检查的目的就是为了避免类型错误，\n即杜绝因类型问题而产生的错误或不良代码，如果一个类型系统能完全做到这一点，就被称为类型安全的\n\n一般情况下，强类型语言对类型控制更严格，因而是类型安全的，而弱类型语言是不安全的。\n（但要注意类型的安全与强弱是正交的两个概念）\n\n类型安全对保证程序的合理性和可靠性很重要，但过于严苛，程序也会失去活力。\n")])])]),s("h1",{attrs:{id:"动态语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态语言"}},[a._v("#")]),a._v(" 动态语言")]),a._v(" "),s("blockquote",[s("p",[a._v("—— 穿着彩衣飞舞的脚本语言")])]),a._v(" "),s("ul",[s("li",[a._v("脚本语言")]),a._v(" "),s("li",[s("ul",[s("li",[a._v("特征")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("以语言的实际用途为标志\n与一般程序一个不同之处是，面向字符而非面向数值的，\n因为字符是最通用的接口，正好发挥它的粘合作用，而数值运算对性能要求较高，多由核心程序来完成\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("脚本（Script）")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("A script is what you give the actors, a program is what you give the audience.\n//脚本是给演员（程序员）看的，节目（程序）是给观众（用户）看的。\n\n脚本是为程序员服务的，而程序是为终端用户服务的\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("Shell")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("主要用于整合其他程序\n注重简洁实用、语法也不太严格、性能要求也不高\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("Perl")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("高级脚本语言\n在Shell脚本、AWK、SED基础上，融合了命令式的C与函数式的Lisp的特征\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("应用")])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("命令行程序、图形界面应用、多媒体应用、网络应用等\n")])])]),s("ul",[s("li",[a._v("动态语言")]),a._v(" "),s("li",[s("ul",[s("li",[a._v("特征")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("以语言的语法特征为标志")])]),a._v(" "),s("ul",[s("li",[s("ul",[s("li",[s("ul",[s("li",[a._v("从用途上看")])])])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("一个脚本语言如果不在局限于命令行工具和粘合工具\n从专用语言发展为通用语言，并能胜任复杂的应用开发，或许更有资格归为动态语言\n\n动态语言继承了脚本语言擅长字符处理的特征\n除了正则表达式外，为字符串、数组、列表、集合、映射等常用数据结构\n提供了丰富简洁的运算，远比静态语言依赖库来的自然方便得多\n")])])]),s("ul",[s("li",[s("ul",[s("li",[s("ul",[s("li",[a._v("从用法上看")])])])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("动态语言能在运行中增加或改变数据结构、函数定义、对象行为或指令流等\n\n如果说动态类型语言的动态体现在类型上，动态语言的动态体现在结构和功能上\n静态语言可能也能实现同样的效果，但不方便也是不自然的\n动态语言大多数是开源的，其本身的发生也更具有动态性\n")])])]),s("ul",[s("li",[s("ul",[s("li",[s("ul",[s("li",[a._v("从语法上看")])])])])])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("动态语言为了粘合来之不同系统、不同语言的程序，对类型的要求不如静态语言那么严格\n代码更加简洁自由，故而多为动态类型和弱类型的，天然支持泛型编程\n\n大多数动态语言支持eval函数，能动态执行任意字符串形式的代码，并有丰富的反射机制，天然支持元编程\n很多动态语言还支持高阶函数和闭包等在内的函数式编程\n大多数动态语言也支持面对对象编程（Python、Ruby、Perl 5、PHP 3）\n许多动态语言也支持并发式和过程式编程\nPython Groovy Ruby 等可以进行切面编程\n逻辑式编程语言的代表Prolog，具有动态语言的特征\n至于事件驱动，对于支持callback的语言来说都不是难事\n")])])]),s("ul",[s("li",[s("ul",[s("li",[a._v("理念")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("优化人的时间而不是机器的时间")])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("为提高人的生产率，宁可牺牲一部分性能或者购买更高配置的硬件\n由于硬件相对于人力在不断贬值，该理念有合理的显式基础\n")])])]),s("h1",{attrs:{id:"语言误区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语言误区"}},[a._v("#")]),a._v(" 语言误区")]),a._v(" "),s("blockquote",[s("p",[a._v("—— 语言的宗教情结")])]),a._v(" "),s("blockquote",[s("p",[a._v("语言只有两种：一种怨声载道，一种无人问津。")])]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("如果一种语言不影响你对编程的看法，那么就不值得去了解\n对于一个程序员来说，编程语言才是立身之本（包括语言背后的思想）\n")])])]),s("h1",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[a._v("#")]),a._v(" Notes")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/notes/languageVStype-system.html"}},[a._v("类型系统与语言")])],1)])}),[],!1,null,null,null);l.default=t.exports}}]);