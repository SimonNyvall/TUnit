"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[3398],{380:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(4848),r=t(8453);const o={sidebar_position:13},i="Class Constructor Helpers",c={id:"tutorial-extras/class-constructors",title:"Class Constructor Helpers",description:"Some test suites might be more complex than others, and a user may want control over 'newing' up their test classes.",source:"@site/docs/tutorial-extras/class-constructors.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/class-constructors",permalink:"/TUnit/docs/tutorial-extras/class-constructors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Executors",permalink:"/TUnit/docs/tutorial-extras/executors"},next:{title:"Command Line Flags",permalink:"/TUnit/docs/tutorial-extras/command-line-flags"}},a={},l=[];function d(e){const s={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"class-constructor-helpers",children:"Class Constructor Helpers"})}),"\n",(0,n.jsxs)(s.p,{children:["Some test suites might be more complex than others, and a user may want control over 'newing' up their test classes.\nThis control is given to you by the ",(0,n.jsx)(s.code,{children:"[ClassConstructorAttribute<T>]"})," - Where ",(0,n.jsx)(s.code,{children:"T"})," is a class that implements ",(0,n.jsx)(s.code,{children:"IClassConstructor"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["This interface simply requires you to generate a ",(0,n.jsx)(s.code,{children:"T"})," object - How you do that is up to you!"]}),"\n",(0,n.jsx)(s.p,{children:"By giving the freedom of how classes are created, we can tap into things like Dependency Injection."}),"\n",(0,n.jsxs)(s.p,{children:["You can also add ",(0,n.jsx)(s.a,{href:"/TUnit/docs/tutorial-extras/event-subscribing",children:"event-subscribing interfaces"})," to get notified for things like when the test has finished. This functionality can be used to dispose your object afterwards."]}),"\n",(0,n.jsx)(s.p,{children:"Attributes are new'd up per test, so you can store state within them."}),"\n",(0,n.jsx)(s.p,{children:"Here's an example of that using the Microsoft.Extensions.DependencyInjection library"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"using TUnit.Core;\n\nnamespace MyTestProject;\n\npublic class DependencyInjectionClassConstructor : IClassConstructor, ITestEndEvent\n{\n    private static readonly IServiceProvider _serviceProvider = CreateServiceProvider();\n\n    private AsyncServiceScope _scope;\n\n    public T Create<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] T>(ClassConstructorMetadata classConstructorMetadata)\n        where T : class\n    {\n        _scope = _serviceProvider.CreateAsyncScope();\n        \n        return ActivatorUtilities.GetServiceOrCreateInstance<T>(_scope.ServiceProvider);\n    }\n\n    public ValueTask OnTestEnd(TestContext testContext)\n    { \n        return _scope.DisposeAsync();\n    }\n\n    private static IServiceProvider CreateServiceProvider()\n    {\n        return new ServiceCollection()\n            .AddSingleton<SomeClass1>()\n            .AddSingleton<SomeClass2>()\n            .AddTransient<SomeClass3>()\n            .BuildServiceProvider();\n    }\n}\n\n[ClassConstructor<DependencyInjectionClassConstructor>]\npublic class MyTestClass(SomeClass1 someClass1, SomeClass2 someClass2, SomeClass3 someClass3)\n{\n    [Test]\n    public async Task Test()\n    {\n        // ...\n    }\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(6540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);