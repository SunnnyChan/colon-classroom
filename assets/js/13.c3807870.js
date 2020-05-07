(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{257:function(t,n,e){"use strict";e.r(n);var s=e(28),I=Object(s.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"_12-2-依赖原则-有求皆苦，无欲则刚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-依赖原则-有求皆苦，无欲则刚"}},[this._v("#")]),this._v(" 12.2 依赖原则——有求皆苦，无欲则刚")]),this._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("\t间接原则有一个直接的推论，那便是依赖反转原则（Dependency Inversion Principle， DIP）\n\t\t指高层不应该依赖低层模块，他们都应该依赖抽象；抽象不应依赖细节，细节应该依赖抽象。\n\t\t（P359 间接原则在依赖反转原则中的体现）\n\t\t接口一方面作为一种抽象类型，描述一类对象所应遵守的行为规范；\n另一方面作为间接层，把两个耦合的具体类进行了分离。\n\tDIP产生的背景是什么？\n\t\t从代码实现角度看，高层模块对低层模块的依赖是非常自然的。\n\t\t\t而且高层模块和底层模块往往是决策（Policy）与机制（mechanism）之间的关系，高层决策已底层机制为基础，逻辑上似乎是合理的。\n\t\t然而从设计上的角度看，高层决策以底层机制为基础，逻辑上视乎也是合理的。\n\t\t然而从软件设计上的角看，这种依赖是非常不合理的，为什么呢？\n\t\t\t依赖通常是传递性的（transitive），即A依赖B，B依赖C，那么A讲依赖C。\n\t\t\t\t这意味着，任何依赖高层模块的客户代码最终将依赖低层模块，一旦低层模块发生变化，很可能会波及高层的客户代码。\n\t\t\t\t退一步，即使低层模块不变，高层模块往往也会在不同的花镜下选取不同的低层模块。\n\t\t\t\t\t如果把这种因地制宜的策略硬编码到高层模块中，它的可维护性和可扩展性将收到严重限制。为解决高层模块对低层的依赖问题，提出了依赖反转原则。\n\t依赖是无法真正消除的，只是在不同的模块或对象之间进行了迁移。\n\t\tDIP解除了高层和低层之间的依赖关系的同时，有在它们和某个抽象模块之间建立了新的依赖关系。\n\t\t虽然依赖仍然存在，但重构后的依赖体系比就的更加优越，因为抽象模块脱离了具体的细节，更稳定更持久，从而整体的系统结构更有弹性、更经得起需求和环境的变化。\n\tDIP倡导依赖抽象，而抽象在此处最大的目的就是稳定，\n\t\t因此依赖反转原则可重述为稳定依赖原则（SDP）：\n\t\t\t模块应朝着稳定的方向依赖。\n\t\t\t（P361 图12-7 DIP在JDBC中的应用）\n\tDI模式（Dependency Injection）\n\t\t（P363 图12-8 DI模式的应用，实心代码合成，空心代表聚合）\n\t\tDI强调依赖的来源，完全由外界提供，该依赖自然最好是抽象的，但并非首要要求。DIP强调依赖的抽象性。\n\t\tDI是更加具体的策略，一般用于类级别的模块，故为一种设计模式。DIP还可以用于类库、组建、架构层等大级别的模块，故为一种设计原则。\n\t\t合成是垄断式的拥有，未采用DI模式时，一个对象通常有责任控制它所依赖的对象的生命周期，这是一种生存权的垄断。\n\t\t此外，调用类没有对外提供访问被调用类的接口，该对象时为其独占的，这是一种所有权的垄断。\n\t\t采用DI模式后，被调用类的对象从外部注入，前置放弃了对后者的生杀大权和独家拥有权。\n\t\t\t采用DI模式后，被调用类的对象从外部注入，前置放弃了对后者的生杀大权和独家拥有权。\n\t\t\t\t因此前者的复杂度更低、专注度更高、依赖性更弱、灵活性更强。\n\t\t\t\t这便是DI的要点：\n\t\t\t\t\t少一份责任多一份专注，内聚度随之增加；\n\t\t\t\t\t少一份权利则多一份自由，耦合度随之降低。\n\t\t采用DI模式后，通常会安排专门的模块——不妨称之为供应者（provider）和装配器（assembler）——来管理外来依赖的对象，这是一中良好的职责分工，符合关注点分离（SoC）的原理。\n\t组件\n\t\t一组具有特定功能规范的可重用的软件单元，是不依赖于应用程序的模块。\n\t\t它涵盖面很广，可以大到子系统、网络服务、框架、类库，也可以小到若干个相互协作的类乃至单个类和函数。\n\t\t组件是一个抽象层，也可看作一个广义的ADT，因为它们通过规范接口为客户提供一系列相关的服务。\n\t\t一个组件的价值在于它为客户提供的服务，而服务的质量取决于服务端深度和广度。\n\t\t\t服务的深度体现在对客户尽可能多的承诺，服务的广度体现在对客户尽可能少的要求。\n\t\t为了增加深度，组件需要客户的配合，于是希望拥有主动调用客户方的权利——反向控制权。\n\t\t\t但这样一来组件难免对客户产生一定的依赖，最终会影响服务的深度。\n\t\t\t可见深度和广度存在一定的矛盾，而矛盾的关键在于控制和依赖之间的关系。\n\t\t如果组件能再不依赖客户的情况下，实现对客户的控制，问题便迎刃而解。这即是控制反转的思想：\n\t\t\t一面引入抽象规范来解除对客户的直接依赖，从而保证服务的广度；\n\t\t\t一面借助抽象借口哦来完成组件对客户的反向控制，从而保障服务的深度。\n\t\t\t如此设计的组件实用价值高、适用范围广，真正做到了为重用而设计。\n\t控制反转（IoC）\n\t\t是一个较为普遍的原则，广泛应用于框架设计中。\n\t\t打破了常规的流程控制模式，把控制权从用户的应用代码转给了底层的摸个组件。\n\t\t它并无严格的定义，但可抽象为一种管理组件依赖的机制，已保证组件总能在合适的时候获得合适的依赖。\n\t\t显然，DI是IoC的一种实现方式。广泛地被轻量级的Spring容器采用。\n\t\t\t（DI有两个方面的IoC）\n\t\t\t\t一是组件把创建并管理所依赖的控制权交给了其它模块；\n\t\t\t\t 二是组件在服务过程中，反向调用来自应用层的（被注入的）依赖，\n\t\t\t\tDI容器一般主要强调前者，而本文主要强调后者。\n\t\t依赖查找（Dependency Lookup）\n\t\t\t是另一种实现方式，广泛地为重量级的EJB2.0容器采用。\n\t控制与依赖之间的联系\n\t\t有求于人难免受制于人，足见控制与依赖的对立性。\n\t\t控制者不能依赖被控制者，相反被控制者依赖控制者。\n\t\t\t因而颠倒了控制的方向，也会颠倒依赖的方向，这就是为什么控制反转与依赖反转相协一致的原因。\n\t回调与依赖反转\n\t\t在回调函数中提到的主体是底层函数，在依赖反转中提到的主体是高层模块。\n\t\t\t尽管他们所处的相对位置不同，但都属于我们所定义的可重用组件，\n\t\t它们的共同点，或者说控制反转与依赖反转的共同点是：\n\t\t\t通过引入抽象来摆脱对外界不必要的依赖、争取对外界必要的控制权。\n\t\t不同点是：控制反转更侧重保证组件的可重用性，依赖反转侧重保证组件的可维护性。\n\t\t因为IoC是魏了让低层为高层提供充分的服务，而DIP是为了让高层不受低层变化的影响。\n\t\t\t实际上他们完全可以结合使用，例如向上对高层的应用程序通过回调来实现控制反转，向下对低层的基础模块通过引入抽象层来实现依赖反转。\n\t\t\t其实两者没有本质的区别——回调也是一种抽象层，而控制反转和依赖反转是相通的，只是习惯上把（拥有流程控制权的）应用程序与底层库的关系看做控制和被控制的关系，相应的反转被称为控制反转。\n\t\t\t把（可重用）模块和底层基础模块的关系看做依赖和被依赖的关系，相应的反转被称为依赖反转。\n\t\tIoC可适用于框架和架构设计，也可作为一种设计模式。它的思想还全方位的渗透于OOP中。\n\t总结\n\t\t总之，DIP为IoC反转提供了一个准则——依赖抽象，而DI则是遵守该准则的一种具体技巧。\n\t\t\t它们三者统称为依赖原则。\n\t\t抽象与规范、间接与分离、依赖与控制、接口与服务，每一对中前者更具代表性，故而我们把它们分别称为抽象原则、间接原则、依赖原则和接口原则（针对接口编程原则）。\n\t\t服务可看作接口的同义语，接口更偏重语法，服务偏重语义。\n\t\t\t接口是一种抽象，它掩盖了实现细节；\n\t\t\t接口是一种规范，它定义了服务契约；\n\t\t\t接口是一种间接，同时还是实现间接层的关键手段；\n\t\t\t接口可以产生分离，规范与实现的分离、职责的分离、关注点的分离；\n\t\t\t接口作为解耦点，可以消除非本质的依赖；\n\t\t一言以蔽之，抽象和规范是根本，间接和分离是手段，依赖和控制是关键，接口和服务是核心。\n\t\tDIP可以作为间接原则的一个推论，即在高层和低层之间引入抽象层。\n\t\t从过程式演化为对象式的过程是一个权力（或控制）去中心化的过程，当这种权力（或控制）的转移以接口为媒介时，便成了控制反转。\n")])])])])}),[],!1,null,null,null);n.default=I.exports}}]);