(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{276:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_8-2-访问控制-代码的多级管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-访问控制-代码的多级管理"}},[t._v("#")]),t._v(" 8.2 访问控制——代码的多级管理")]),t._v(" "),s("h2",{attrs:{id:"重用的度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重用的度"}},[t._v("#")]),t._v(" 重用的度")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("合理的重用既可以节省开发时间，又节省了维护时间，代码也显得更简洁优美。\n\n但是过犹不及，过度重用也可能会造成滥用和误用。\n\t一方面，开发者容易沉溺于局部重用的妙处而忽略整体设计，淡忘开发类最核心的职责。\n\t另一方面，一旦所重用的类或方法发生改变，所有的重用者均受牵连，先前节省的时间会加倍偿还。\n\n软件的可重用性建立在应变性的基础之上。二者出现矛盾需要作取舍时，应该以后者为重。\n或者说，没有足够的应变能力，不够资格被重用。\n")])])]),s("h2",{attrs:{id:"度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#度"}},[t._v("#")]),t._v(" ‘度’")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("任何一门技艺到了高级阶段，都是‘度’的学问。\n初级程序员的理想是为所欲为——能用编程解决一切问题\n中级程序员的理想是尽善而为——追求最佳解决方案\n高级程序员的理想是有所为有所不为——重在整体设计的选择，能抵制局部技巧的诱惑\n最高理想是无为而无不为——无论宏观设计还是微观实现，均非刻意选择，却自然合度。\n")])])]),s("h2",{attrs:{id:"访问修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问修饰符"}},[t._v("#")]),t._v(" 访问修饰符")]),t._v(" "),s("ul",[s("li",[t._v("C++ Java C# 语言实现")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("无限制\n\tC++ Java C# public\n子类或同一包\n\tC++ 无 、Java protected 、C# protected internal\n同一类或子类\n\tC++ protected、Java private protected（discard）、C#\tprotected\n子类或同一包\n\tC++ 无、Java package（default）、 C# internal\n同一类\n\tC++ private（default）、Java private 、C# private（default）\n")])])]),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("访问修饰符（access modifier）除了应用于类的成员外，在Java 和 C#中还能应用于整个类。\n\nJava 和 C# 比C++多了包的概念，Java的protected相当于C#的protected internal，\n不仅可以访问同类和子类，还能被同一包的任何类访问。\n而C++和C#中的protected只能被同类和子类访问，相当于Java中昙花一现的 private protected。\n")])])]),s("ul",[s("li",[t._v("选择访问修饰符的原则")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("基本原则是尽可能的使用限制性更强的修饰符。即使以后改变注意，在放宽也不迟。\n\t相反的，将一个修饰符收窄就要估计对现存客户的影响。\n\n尤其是域成员，没有特殊的理由都应该是priavte，除非类是一个用作存储的具体数据类型、private内部类或域是一个静态常量。\n\t域成员代表对象的状态，从运行方面看，若外界随意读取和改动，可能会破坏不变量（invariant），无法保证内在逻辑的一致性；\n\t从设计方面看，属结构性信息，极易变化；\n\t从接口方面看，公开接口都是以方法而非域的形式出现的，这些都要求隐藏域成员。\n")])])]),s("ul",[s("li",[t._v("如果将类看做是一个服务者，他向不同范围内的客户承诺不同的服务，或者说是提供了层次化的服务。")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("public 方法成员向所有类提供服务，\nprotected 方法成员对该类的子类提供服务，\nprivate 方法成员则只对该类本身提供服务。\n")])])]),s("h2",{attrs:{id:"嵌套类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套类"}},[t._v("#")]),t._v(" 嵌套类")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("在一个类的内部定义另一个类，我们称之为嵌套类（nested class），或者嵌套类型。\n\n之所以引入这样一个嵌套类，往往是因为外围类需要使用嵌套类对象作为底层实现，\n并且该嵌套类只用于外围类的实现，且同时可以对用户隐藏该底层实现。\n")])])]),s("h2",{attrs:{id:"c-中的friend修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-中的friend修饰符"}},[t._v("#")]),t._v(" C++中的friend修饰符")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("一个类与友类或友函数是联合关系而非主客关系，它们之间的互访和普通类内部成员的互访没有本质的区别。\n甚至由于friend的单向授权，它反而可以看做private的一种细化。（P231）\n访问控制的要害在于合理的控制关联代码的分布，而非单纯地越严格越好。\n")])])]),s("h2",{attrs:{id:"一个类的方法能否访问除了this之外的其他同类对象的private成员？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个类的方法能否访问除了this之外的其他同类对象的private成员？"}},[t._v("#")]),t._v(" 一个类的方法能否访问除了this之外的其他同类对象的private成员？")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("访问控制是对静态代码的控制，而不是对动态代码的控制。所以它是以代码而不是对象为边界的。\n")])])]),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printXIm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printXIm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$obj")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"%s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objTest")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n\n以上代码 正常 输出：\n1\n2\n")])])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 从抽象的角度来看，访问控制划分了抽象的边界\n一方面从语义上明确抽象的层次化\n\t越公开的成员越接近抽象接口，越远离具体实现\n\n另一方面从语法上实行双向保护\n\t——既保护实现代码不受客户代码入侵，也保护客户代码不受实现代码变更的影响\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 从软件应变的角度来看，访问控制划分了代码修改的边界\n\n由此，访问控制越松的成员，辐射范围越广，软件重用的效率越高，\n承担的责任越大，修改的代价也越大，因而变化的可能性应该越小。\n\n成熟的程序员对public和protected接口的设计一定慎之又慎，\n往往在其上花费的工夫更甚于具体代码的编写。\n")])])]),s("ul",[s("li",[t._v("客户意识")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("这里的客户不是指软件终端的消费者，而是软件中间消费或重用者，\n即调用该软件的代码，有时也指相应代码的编写者。\n\n客户意识对于一个程序员的重要性，丝毫不亚于对一个企业的重要性。\n\n如何培养？\n\t轻诺者，必寡信。每一个public类，每一个非private成员，都是一份承诺。\n\t没有明确职责、没有准备承担变更后果之前，请采用最严格的访问控制。\n\n有了客户意识，才有接口责任感。\n\n通过合理的运用访问控制，将类的接口层次化、职责层次化、服务层次化，从而将客户相应地层次化。\n\n千万不要追求廉价的重用而轻易扩大范围接口，\n莫以自身之便而致客户之不便，莫以一时之便而致长期之不便。\n\n另外，单元测试对培养客户意识很有帮助，不仅能发现代码的逻辑缺陷还能发现代码的设计缺陷。\n因为单元测试代码是最典型的客户代码，它能让你站在客户的角度重新审视自己的接口设计。\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);