﻿using TUnit.Assertions;
using TUnit.Assertions.Extensions;

namespace TUnit.TestProject;

public class DependsOnTestsOtherClass2
{
    internal static DateTime Test1Start;

    [Test]
    public async Task Test1()
    {
        Test1Start = TestContext.Current!.TestStart!.Value.DateTime;
        await Task.Delay(TimeSpan.FromSeconds(5));
    }
}

public class DependsOnTestsWithClass2
{
    private static DateTime _test2Start;
    
    [Test, DependsOn(typeof(DependsOnTestsOtherClass2))]
    public async Task Test2()
    {
        _test2Start = TestContext.Current!.TestStart!.Value.DateTime;
        await Task.CompletedTask;
    }

    [After(Class)]
    public static async Task AssertStartTimes()
    {
        await Assert.That(_test2Start).IsAfterOrEqualTo(DependsOnTestsOtherClass2.Test1Start.AddSeconds(4.9));
    }
}