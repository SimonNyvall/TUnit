"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[4031],{7487:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(4848),n=s(8453);const i={sidebar_position:5},r="Injectable Class Data Source",o={id:"tutorial-basics/class-data-source",title:"Injectable Class Data Source",description:"The ClassDataSource attribute is used to instantiate and inject in new classes as parameters to your tests and/or test classes.",source:"@site/docs/tutorial-basics/class-data-source.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/class-data-source",permalink:"/TUnit/docs/tutorial-basics/class-data-source",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data Driven Tests",permalink:"/TUnit/docs/tutorial-basics/data-driven-tests"},next:{title:"Method Data Sources",permalink:"/TUnit/docs/tutorial-basics/method-data-source"}},l={},d=[{value:"Shared = SharedType.None",id:"shared--sharedtypenone",level:3},{value:"Shared = SharedType.Globally",id:"shared--sharedtypeglobally",level:3},{value:"Shared = SharedType.ForClass",id:"shared--sharedtypeforclass",level:3},{value:"Shared = SharedType.Keyed",id:"shared--sharedtypekeyed",level:3},{value:"Initialization and TearDown",id:"initialization-and-teardown",level:2}];function c(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"injectable-class-data-source",children:"Injectable Class Data Source"})}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"ClassDataSource"})," attribute is used to instantiate and inject in new classes as parameters to your tests and/or test classes."]}),"\n",(0,t.jsx)(a.p,{children:"The attribute takes a generic type argument, which is the type of data you want to inject into your test."}),"\n",(0,t.jsxs)(a.p,{children:["It also takes an optional ",(0,t.jsx)(a.code,{children:"Shared"})," argument, controlling whether you want to share the instance among other tests.\nThis could be useful for times where it's very intensive to spin up lots of objects, and you instead want to share that same instance across many tests."]}),"\n",(0,t.jsx)(a.p,{children:"Ideally don't manipulate the state of this object within your tests if your object is shared. Because of concurrency, it's impossible to know which test will run in which order, and so your tests could become flaky and undeterministic."}),"\n",(0,t.jsx)(a.p,{children:"Options are:"}),"\n",(0,t.jsx)(a.h3,{id:"shared--sharedtypenone",children:"Shared = SharedType.None"}),"\n",(0,t.jsx)(a.p,{children:"The instance is not shared ever. A new one will be created for you."}),"\n",(0,t.jsx)(a.h3,{id:"shared--sharedtypeglobally",children:"Shared = SharedType.Globally"}),"\n",(0,t.jsx)(a.p,{children:"The instance is shared globally for every test that also uses this setting, meaning it'll always be the same instance."}),"\n",(0,t.jsx)(a.h3,{id:"shared--sharedtypeforclass",children:"Shared = SharedType.ForClass"}),"\n",(0,t.jsx)(a.p,{children:"The instance is shared for every test in the same class as itself, that also has this setting."}),"\n",(0,t.jsx)(a.h3,{id:"shared--sharedtypekeyed",children:"Shared = SharedType.Keyed"}),"\n",(0,t.jsxs)(a.p,{children:["When using this, you must also populate the ",(0,t.jsx)(a.code,{children:"Key"})," argument on the attribute."]}),"\n",(0,t.jsx)(a.p,{children:"The instance is shared for every test that also has this setting, and also uses the same key."}),"\n",(0,t.jsx)(a.h2,{id:"initialization-and-teardown",children:"Initialization and TearDown"}),"\n",(0,t.jsxs)(a.p,{children:["If you need to do some initialization or teardown for when this object is created/disposed, simply implement the ",(0,t.jsx)(a.code,{children:"IAsyncInitializer"})," and/or ",(0,t.jsx)(a.code,{children:"IAsyncDisposable"})," interfaces"]}),"\n",(0,t.jsx)(a.h1,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:"public class MyTestClass\n{\n    [Test]\n    [ClassDataSource<WebApplicationFactory>(Shared = SharedType.Globally)]\n    public void MyTest(WebApplicationFactory webApplicationFactory)\n    {\n    }\n\n    public record WebApplicationFactory : IAsyncInitializer, IAsyncDisposable\n    {\n        // Some properties/methods/whatever!\n\n        public Task InitializeAsync() \n        {\n            await StartServer();\n        }\n\n        public ValueTask DisposeAsync() \n        {\n            await StopServer();\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(a.h1,{id:"class-data-source-overloads",children:"Class Data Source Overloads"}),"\n",(0,t.jsxs)(a.p,{children:["If you are using an overload that supports injecting multiple classes at once (e.g. ",(0,t.jsx)(a.code,{children:"ClassDataSource<T1, T2, T3>"}),") then you should specify multiple SharedTypes in an array and keys where applicable."]}),"\n",(0,t.jsx)(a.p,{children:"E.g."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'[Test]\n    [ClassDataSource<Value1, Value2, Value3, Value4, Value5>\n        (\n        Shared = [SharedType.Globally, SharedType.Keyed, SharedType.ForClass, SharedType.Keyed, SharedType.None],\n        Keys = [ "Value2Key", "Value4Key" ]\n        )]\n    public class MyType(Value1 value1, Value2 value2, Value3 value3, Value4 value4, Value5 value5)\n    {\n\n    }\n'})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>o});var t=s(6540);const n={},i=t.createContext(n);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);