(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{255:function(t,n,e){"use strict";e.r(n);var a=e(28),s=Object(a.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"_11-2-语义类型-阴阳之道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-语义类型-阴阳之道"}},[this._v("#")]),this._v(" 11.2 语义类型——阴阳之道")]),this._v(" "),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[this._v("\t值语义的对象是独立的，\n引用语义的对象是允许共享的（别名效应）。\n\t\t//值变量v1和v2相互独立\n\t\t\tValueType v1 = someValue;\nValueType v2 = v1;\n\t\t//引用变量r1和r2 相关关联\n\t\t\tReferenceType r1 = someObject;\nReferenceType r2 = r1;\n\t语法与语义不总是一致的\n\t\t——语法上的值类型可能在语义上是引用类型，反之也是可能的。\n\t\t语法只是手段，语义才是目的。\n\t\t//值类型拥有引用语义（C++）\n\t\t\tValueType v1 = someValue;\nValueType& v2 = v1;  // 通过引用 v2成为v1的别名\nValueType* v3 = "),n("span",{pre:!0,attrs:{class:"token entity",title:"&v1;"}},[this._v("&v1;")]),this._v(' // 通过指针 v3指向v1\n\t\t//引用类型拥有值语义（假定它是Java中的Cloneable类）\n\t\t\tReferenceType r1 = someObject;\nReferenceType r2 = (ReferenceType)r1.clone();\n\t如何判断一个类型的语义？\n\t\t石蕊测试法：\n\t\t\t在不影响程序正确性的前提下，一个对象的复件能否代替原件？如果答案是肯定的，则对象的类型是值语义的，\n否则是引用语义的。\n\t\t\t注意，这种判别方法跟语法无关。完全取决于对象设计者的用意。\n\t\t从命令式编程的角度看\n\t\t\t一个值语义变量的内存地址是无关紧要的，原件与复件的唯一差别是在消除后变得完全等价，因而值语义又称复制语义（copy semantics）。\n\t\t\t引用语义变量的内存地址至关重要，通常用指针来实现，因而引用又称为指针语义。\n\t\t从函数式编程角度看\n\t\t\t值应当是引用透明的（referntial transparency），即一个表达式随时可以被其值所替换。\n\t\t\t\t比如2+3总是可用5来代替。"ab".concat("cd")总是可用"abcd"来替代。\n\t\t\t显然，值的可替换性实质上抹煞了引用的作用。\n\t\t从对象式编程的角度看\n\t\t\t值语义与引用语义的区别在于对象标识的重要程度。\n\t\t\t\t（object identity，即一个对象区别于另一个对象的唯一标识，每个对象都具备的一种性质，反映了一个对象作为一个实体的独立性、可识别性和本体性，是对象的3大特征之一）\n\t\t\t倘若一个对象的标识在程序中没有实际意义，意味着它的对象特征模糊、主体意识淡薄、更多地代表的是一种抽象的属性而非一个具体的实体，则它具有值语义，反之则具有引用语义。\n\t\t值通过具体的数据来描述抽象的属性，\n引用通过抽象的方式来指代具体的实体。\n\t\t\t比如，要描述某个物体，可以用值表示它的形状、大小、重量等熟悉。这些值虽然是具体的，但描述的属性确实抽象的。\n\t\t\t要指定某个物体，那么指的对象时具体的，至于如何获取对象属于无关宏旨的实现细节，可以认为是抽象的。\n\t\tJava和C#中的string类虽然是引用类型，\n但它们的值语义是很明显的。\n\t\t\t人们关心的是字符串内容，没人会在于它的地址。\n\t\t\tJava初学者比较容易犯的一个错误就是用相等运算符来比较字符串的异同。\n\t\t\t\t（Java中双等号比较的是字符串的引用，用equals方法比较的才是字符串的内容）\n\t\t\t干脆明智地重载了String的相等运算符，避免类似的错误。\n\t\t\t\tC++中包括string在内的所有自定义类型本就是基于值语法的。\n\t\t值是不依赖于内存地址的，\n即具有空间无关性，实际上值通常还具有时间无关性，\n\t\t\t即一个值语义的对象在其生命周期中的状态是固定的。\n也就是说，值语义类型一般是不可变的。\n\t\t\t\tString s1 = "ab";\nString s2 = s1\';\nassert(s1 == s2);  //s1 s2 指向相同的对象\ns2 += "cd";\nassert(s1 != s2);  //s1 s2 指向不同的对象\n\t\t\t\t如果string是可变的，那么s2的内容从\'ab\'变成\'abcd\'后，s1的内容也会发生相应的变化。\n\t\t\t\t\t这会产生别名问题，通常不是我们想要的效果。因此s2完成自增运算之后，系统便让它指向另外一个对象，而原先的字符串对象仍保持不变。如此一来，便省去了referenceType那样显式克隆的过程。\n\t\t\t\t\t由此可见，不可变性为引用类型贯彻值语义提供了变通的语法支持。\n\t\t\tJava和C#中的StringBuilder，角色定位不是字符串的拥有者，\n而是字符串的创造者，故而是可变的，并不具备值语义\n\t\t\tC++的string由于是值类型，对不可变性的需求没有那么强烈。\n\t\t\t但除非特别需要，程序员还是应该尽可能保持字符串对象的不可变性。\n\t\t\t\t除了在赋值、按值传递、作为返回值等凭借值类型的特点来保证字符串的复制以外，还可以利用关键字const来保证常量正确性。\n\t\t\tJava和C#中的基本数据类型是值类型的，\n\t\t\t\t但有时需要引用类型的身份出现，这就需要一个转化的过程（C++无需转化，可以利用指针直接为变量创建引用），术语称为装箱，逆过程chenweil拆箱。\n\t\t\t\t装修后的对象虽然是引用类型的，但仍保持值语义，因此应该是不可变的。\n\t\t\t日期类型也具有典型的值语义，\n\t\t\t\t在C#中可以用值类型的DataTime结构来表示，而在Java中只能用引用类型的Date类遗憾的是它是可变的。\n\t\t\t\t要实现其值语义，只有手工来弥补引用类型和值类型之间的差别，即在日期的传递或赋值过程中进行防御性赋值。比如在getter方法返回对象的日期属性之前、在setter方法用传入的日期参数赋值之前，都应该拷贝一份对象，就像刚在值语义的ReferenceType中所做的那样。\n\t\t\t\t虽然这多少会影响程序性能，但程序的正确性永远是第一位的。\n\t\t\t\t略有讽刺的是，当初Date被设计为可变类型是为了减少对象的创建（早期JVM的垃圾回收器效率不够高，对创建新对象更加敏感），\n\t\t\t\t\t但结果却可能事与愿违——重复的防御性赋值也许会创建更多的对象（避免重复复制的一个方法是：在规范文档中进行相关说明，但这并不那么自然，也不能保证客户能遵守规范）。\n\t\t\t值是静态单纯的，引用是动态复杂的。从这个角度讲，不可变性加强了值语义。\n\t\t\t\t譬如整型是最常见的值类型之一，一个整数便是一个常量，理所当然是不可变的。\n\t\t\t\t同理，一个值语义的对象也应该是一个常值。\n\t\t\t\t\t如，颜色类型Color具备典型的值语义，在C#和Java中都是不可变的。\n\t\t\t\t\tx = Color.RED 与 x = 1 没有本质区别，无非就是取值空间不同罢了。\n\t\t\t\t\t\t当x重新赋值为Color.GREEN是，原来的对象Color.RED并未发生变化，只是不在被x引用。\n\t\t\t退一步讲，即便值语义的对象是可变的，\n它与引用语义对象在概念上仍有区别：\n\t\t\t\t值语义对象的改变是一种新旧更替，即新对象替换了旧对象，只是凑巧重用了后者所占用的内存空间；\n\t\t\t\t引用语义对象的改变是一种自我更新，即一个对象在保持同一性的前提下发生的状态迁移或属性改变。\n\t\t\t\t类似地，钱包里的钞票虽然进进出出，但从值语义上看，重要的是钞票的总数——越多越好；从引用语义上看，重要的是钱包的同一性——别给掉包了。\n\t\t\t不可变性让语法上的引用类型倾向于值语义，\n不可复制性则让语法上的值类型具备明显的引用语义。\n\t\t\t\t这非常自然：值语义的特点是复件具有等效性，引用语义的特点是复件不具等效性。\n\t\t\t\t当然不可复制是一种比较极端的情形，因为一般引用语义的类型也是允许赋值的，只不过不能替代原件而已。\n\t\t\t\t由于语法上的缘故，具有不可复制性的值类型主要出现在C++中（Java没有自定义的值类型，而C#中的值类型通常都遵循值语义），如NonCopyable类便可作为不可复制类的基类。\n\t\n在关系型数据库中\n\t\t主键或其他候选键具有逻辑地址功能，从而使数据库记录有别于单纯的数据集合，与OOP中的对象一样具备引用语义，而表中的属性或称字段则具备值语义。\n\t\t于是值语义和引用正交地出现在数据库中：\n\t\t\t作为记录的行堪比引用语义对象，作为字段的列堪比值语义类型。\n\t\t\t数据模型与对象模型在此找到了契合点，ORM（Object-Relational Mapping）技术的基础也由此奠定。\n\t\tOOP中的持久化类（persistent class）\n与RDB（relational database）中的表不具一一对应关系。\n\t\t\t首先，继承层级（inheritance hierarchy）与表之间有多种映射策略，\n未必是一对一的（如，每个具体类一张表；每个类型层级一张表；每个子类一张表）。\n\t\t\t\n其次，如果一个持久化类具有值语义，那么它的对象标识没有意义，\n相应也不会有数据库标识，因而无法对应一张独立的表，只能嵌入其他表中。\n\t\t\t\t这种类在JPA（Java Persistence API）规范中称为嵌入类，\n\t\t\t\t在Hibernate中称为组建（component），以区别于直接与表对应的具有引用语义的实体类型。\n\t数据传输对象简称传输对象\n\t\t多用于基于多层架构（multi-tier Architecture）的分布式系统（distributed system）中。\n\t\t由于不同层（tier）之间的通讯会跨越进程和网络的边界，相对昂贵而缓慢的远程调用（remote call）往往成为性能瓶颈。\n\t\t为了减少通讯次数，每次调用应该返回尽可能多的数据。\n\t\t\t欲达到此目的，单靠增加调用方法参数是不够的。那样不仅代码丑陋、难以维护，而且只适用于C++和C#。Java由于不支持按引用传递，无法通过参数来存储返回值。\n\tJava虽然按值传递，\n但仍可以通过对象引用的复件来设置对象的内容吗？\n\t\tJava的方法参数想要起到返回值的作为，必须满足：\n\t\t\t参数类型不能是基础类型；\n\t\t\t参数类型不能是String那样的不可变类型；\n\t\t\t返回值不取空值，因为按值传递既不能把传入的空值编程非空对象，也不能把传入的非空对象编程空值。\n\t\t\t显然，这些条件过于苛刻了。\n\t\t可以考虑把各种数据结果放入一个数组和集合中。\n\t\t\t可行但有两个缺点：\n\t\t\t\t首先返回的数据未必同类型，而数组和集合的元素一般是同类型的，如果统一采用Object类型，既不方便也不安全。\n\t\t\t\t其次，采用这种方式需要按索引（index）、迭代器（iterator）或键（key）来获取返回结果，与按方法和属性来获取结果相比，不仅不直观，还缺乏必要的编译器检查（方法或属性错误会被编译器察觉，但索引或键名不会）。\n\t\t最佳方法是把所有的数据打包到一个复合对象中。\n\t\t\t打包的目的是构造一个粗粒度的数据集合，打包的结果正式传输对象。这种方法乏陈可新，但非常实用。\n\t\t\t传输对象只是简单的数据容器，出基本的参数验证和内部的一致性校验外不应该有其她行为，更不能包含业务逻辑，至多附加一些必要的序列化读写方法。\n\t\t\t由于传输对象在不同的层之间同时出现，它的域应当只由通用数据类型和其他传输对象组成，这样既便于序列化，又能提高中性度、降低耦合度。\n\t传输对象与值对象区别\n\t\t从结构上看，传输对象属于最平淡无奇的那种对象。人们只关系它所包裹的数据内容，不关心它的同一性，因而具备典型的值语义，是值对象的一种特例。反过来，值对象未必都是传输对象。\n\t\t从实际用途考察，传输对象的主要目的是携带多项数据以减少网络开销，值对象的主要目的是描述其它对象。\n\t\t从内容传递的角度看，传输对象因为重视跨层传输而更关心序列化的问题，值对象因为重视值语义而更关心赋值问题。\n\t\t从抽象程度看，传输对象不过是简单的数据载体，数据的透明度高、内聚度低，即使内部结构直接裸露在外也未尝不可。信息隐藏显得可有可无，甚至连getter、setter方法都可以省去，丝毫不具备抽象性，以前我们以传输对象作为具体数据类型的代表，就是基于此，反观值对象它的范畴更广，可以是抽象数据类型，例如字符串、日志等对象，。\n\t\t从设计模式角度看，传输对象是可变的，因为一个传输对象的内容可能需要多步填充或多次更新。值对象则不同，不可变性是一个应该尽量遵守的原则。\n\t\t从对立概念的角度看，传输对象在实践中常与业务层的业务对象（Business Object, BO）相提并论。业务对象又称领域对象，代表业务逻辑或关系的实体。\n\t\t尽管传输对象与业务对象在结构和数据上经常有重合的部分，但一个是具有值语义、具体而短暂的辅助对象，一个是具有引用语义、抽象而持久的核心对象，具有强烈的对立性。再看值对象，预置对立的概念是引用对象，在领域驱动设计（domain-driven design，DDD）中又称实体。\n\t\t从表现特征来看，引用对象时数据、运算、标识的三位一体，值对象则被抽去了标识，而传输对象连运算也被抽去了，只剩下数据，\n\t\t从关注点来看，传输对象的焦点在于‘有什么’，值对象的焦点在于‘是什么’，引用对象的焦点在于‘是哪个’。\n\t不同的对象时通过引用来区分的，\n是否可以说对象的标识就是它的内存地址？\n\t\t标识不等于引用，标识是一种抽象的OOP概念，多用于对象建模中；引用是一种具体的语法机制，多用于编码实现中。\n\t\t\t虽然大部分标识可以用引用来实现，但也有其他的实现方式，如通过Java中的数组索引。\n\t\t其次，引用不等于内存地址。C++中通过指针实现引用，指针即内存地址。但Java和C#的引用则一般不是原始地址（raw address）。而是不透明的指针（opaque pointer），以保证内存的安全性。\n\t\t\t如果牵扯到序列化的问题，情况会更复杂。例如通过ORM来获取对象时，相同主键对应的对象未必有相同的物理地址（缓存）。\n\t\t\t再如一个对象需要跨系统传输，不同机器的内存地址的比较更是无从谈起。\n如何协调逻辑标识和物理标识之间的矛盾，正是ORM和分布式应用的重要课题之一。\n\t\t\t我们一直避谈标识的具体实现，强调引用的抽象指代，也是基于这方面的考虑。\n\t值与引用的区分还体现在对象建模上：\n\t\t在设计对象模型时，常用UML类图在描述系统的静态结构（UML除了类图、对象图、组件图等静态结构图外，还有活动图、序列图等动态行为图）。\n\t\t一个类的结构特征通常是通过性质（property）来表现的，\n\t\t\t具体来说有两类不同的表示法：属性（attribute）和关联（association）。\n\t\t\t比如，设计一个表示人的类，每个人都有姓名、生日、家庭地址和工作单位，可以用属性来表示。\n\t\t\t还可用用关联来表示。（图P338）\n\t\tUML是用来建模的，重点自然放在与应用系统直接相关的，尚处于分析或设计阶段的对象上。\n\t\t\t值对象多用于属性，引用对象对用于关联。原因是，值对象是附属的、被动的，引用对象时独立的、能动的。\n\t\t相比属性，关联的重要性和独立性更加突出，属性依附于主体的类，关联类与主体类是平等的，关联本身也是与类平行的概念。。\n\t\t\t一般来讲，属性的类型比较基本和通用，如String、Date等；关联的类型比较复杂和转义，比如业务层的业务对象\n\t\t合成比关联的语义强了两级。\n\t\t\t关联关系可以理解为has-a的‘有’关系，如人与工作的双向关——某人有某个工作单位，某工作单位有某些人。\n\t\t\t聚合（aggregation）是一种强关联关系，强调整体与部分的关系，可以理解为owns-a的‘拥有’关系，如某个部门拥有某些成员。\n\t\t\t合成（composition）是一种强聚合，可以理解为contains-a的‘含有’关系。比如某工作单位含有某些部门。\n\t\t\t在此语境中，含有是一种独占，即垄断式的拥有。\n\t\t\t\t合成的整体垄断了部分的所有权，不允许后者被分享。如一个成员可能属于多个部门，但一个部门不能同属多个工作单位。\n\t\t\t\t合成的整体垄断了部分的生存权，整体的销毁意味着部分的销毁。部门解散了，成员个体仍在；工作单位解散了，部门随之解散。\n\t\t\t\t从中再次嗅到了值与引用的味道：值不能共享，引用可以；值不会比它的包含者长寿，引用却可以。（图P340）\n\t\t\t\t因此，合成是基于值语义的包含，聚合是基于引用语义的包含。（实际上在早期的UML草案中，合成被称为aggregation by value、聚合被称为aggregation by reference）\n\t\t关联、聚合、合成的另一个不同是：\n前者可以是三元以上的（n-ary）关系，而后两者只能是二元（binary）关系。\n\t\t关联可以通过引用来实现，聚合和合成有如何在代码中体现？\n\t\t\t单从代码上看，聚合和关联的界限往往很模糊，而合成关系则要清晰的多。\n\t\t\t实现合成至少有两种方法：\n\t\t\t\t一种是让被合成的基础类成为值类型，或至少实现值语义；\n\t\t\t\t另一种是限制外界对呗合成对象的访问，并控制它的生命周期。\n\t\t\t如果合成对象是可持久化的，还要保持数据库的一致性。\n\t\t\t\t比如，删除一个合成对象的记录时，要么实现手工删除合成对象的记录，要么再数据库的表中或包括ORM在内的框架配置中激活连带删除选项。\n\t\t继承在概念上是is-a关系，\n但物理上也是contains-a关系——子类对象的确隐性含有父类对象。\n\t\t\t合成作为继承的替代品，更让这种含有关系暴露无遗。因为合成显性的把被合成对象作为一个域成员。\n\t\t\t从语法和语义的角度看，替代继承的合成与类图中的合成并无区别，只是前者更注重预语法，后者更注重语义。\n\t\t\t从对象设计的角度看，它们的区别是，代码上的合成比实现继承的一个优势在于：被合成的基础类是隐性的、甚至是可以动态改变。然而类图中的合成关系是显性的、静态的。\n\t\tUML类图主要用于分析与设计的\n\t\t\t描述的是系统中本质类的本质属性、本质行为，以及类与类之间的本质关系。\n\t\t\t如果类与类之间的合成关系缺乏实质性，只是实现阶段的决定，\n那么它不应该出现在类图中，有两方面原因：\n\t\t\t\t首先，分析和设计者根本不会考虑非本质关系；\n\t\t\t\t其次，实现者也不希望将实现的细节公诸于众。\n\t为了达到抽象的目的，实现级别的信息需要隐藏，\n靠的是访问控制；设计级别的信息需要过滤，靠的是抽象建模。（P342）\n\t\t一个完整的句子离不开名词和动词，一个完整的ER（Entity-Relationship diagram）离不开实体和关系。\n\t\t同样，一个完整的类图离不开类和关联。类和关联是等量齐观的两个要素，既然在类图中有理由公开某些重要的类，照样也有理由公开某些重要的关联。\n\t\t传输对象与值对象的比较（P343 表11-3）\n\t注：\n\t\tOOP中对象的3大特征是：状态（state）、行为（behaviour）和标识（identity）\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);