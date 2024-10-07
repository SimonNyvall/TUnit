﻿#nullable disable

using System.Runtime.CompilerServices;
using TUnit.Assertions.AssertConditions;
using TUnit.Assertions.AssertConditions.Interfaces;
using TUnit.Assertions.AssertionBuilders;

namespace TUnit.Assertions.Extensions;

public static class TimeOnlyIsExtensions
{
    public static InvokableValueAssertionBuilder<TimeOnly> IsAfter(this IValueSource<TimeOnly> valueSource,
        TimeOnly expected, [CallerArgumentExpression("expected")] string doNotPopulateThisValue = "")
    {
        return valueSource.RegisterAssertion(new FuncValueAssertCondition<TimeOnly, TimeOnly>(default,
                (value, _, _) => { return value > expected; },
                (value, _, _) =>
                    $"{value.ToLongStringWithMilliseconds()} was not greater than {expected.ToLongStringWithMilliseconds()}")
            , [doNotPopulateThisValue]);
    }

    public static InvokableValueAssertionBuilder<TimeOnly> IsAfterOrEqualTo(this IValueSource<TimeOnly> valueSource,
        TimeOnly expected, [CallerArgumentExpression("expected")] string doNotPopulateThisValue = "")
    {
        return valueSource.RegisterAssertion(new FuncValueAssertCondition<TimeOnly, TimeOnly>(default,
                (value, _, _) => { return value >= expected; },
                (value, _, _) =>
                    $"{value.ToLongStringWithMilliseconds()} was not greater than or equal to {expected.ToLongStringWithMilliseconds()}")
            , [doNotPopulateThisValue]);
    }

    public static InvokableValueAssertionBuilder<TimeOnly> IsBefore(this IValueSource<TimeOnly> valueSource,
        TimeOnly expected, [CallerArgumentExpression("expected")] string doNotPopulateThisValue = "")
    {
        return valueSource.RegisterAssertion(new FuncValueAssertCondition<TimeOnly, TimeOnly>(default,
                (value, _, _) => { return value < expected; },
                (value, _, _) =>
                    $"{value.ToLongStringWithMilliseconds()} was not less than {expected.ToLongStringWithMilliseconds()}")
            , [doNotPopulateThisValue]);
    }

    public static InvokableValueAssertionBuilder<TimeOnly> IsBeforeOrEqualTo(this IValueSource<TimeOnly> valueSource,
        TimeOnly expected, [CallerArgumentExpression("expected")] string doNotPopulateThisValue = "")
    {
        return valueSource.RegisterAssertion(new FuncValueAssertCondition<TimeOnly, TimeOnly>(default,
                (value, _, _) => { return value <= expected; },
                (value, _, _) =>
                    $"{value.ToLongStringWithMilliseconds()} was not less than or equal to {expected.ToLongStringWithMilliseconds()}")
            , [doNotPopulateThisValue]);
    }
}