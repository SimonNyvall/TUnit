namespace TUnit.Engine.SourceGenerator.Models;

public record ClassHooksDataModel
{
    public required string FullyQualifiedTypeName { get; init; }
    public required string MinimalTypeName { get; init; }
    public required string MethodName { get; init; }
    public required string[] ParameterTypes { get; init; }
    public required bool HasTimeoutAttribute { get; init; }

    public virtual bool Equals(ClassHooksDataModel? other)
    {
        if (other is null)
        {
            return false;
        }

        if (ReferenceEquals(this, other))
        {
            return true;
        }

        return FullyQualifiedTypeName == other.FullyQualifiedTypeName 
               && MinimalTypeName == other.MinimalTypeName 
               && MethodName == other.MethodName 
               && ParameterTypes.SequenceEqual(other.ParameterTypes);
    }

    public override int GetHashCode()
    {
        unchecked
        {
            var hashCode = FullyQualifiedTypeName.GetHashCode();
            hashCode = (hashCode * 397) ^ MinimalTypeName.GetHashCode();
            hashCode = (hashCode * 397) ^ MethodName.GetHashCode();
            hashCode = (hashCode * 397) ^ ParameterTypes.GetHashCode();
            return hashCode;
        }
    }
}