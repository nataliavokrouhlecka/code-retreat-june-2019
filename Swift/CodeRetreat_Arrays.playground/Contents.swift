import Foundation

runTests()

// Code:

// Beginner:

public func reduce(acc: Int, array: [Int], operation: (Int, Int) -> (Int)) -> Int {
    fatalError("to be implemented")
}

public func map(array: [Int], operation: (Int) -> (Int)) -> [Int] {
    fatalError("to be implemented")
}

public func isEmpty(array: [Int]) -> Bool {
    fatalError("to be implemented")
}



// Expert:

extension Sequence {
    @inlinable public func map2<T>(_ transform: (Element) throws -> T) rethrows -> [T] {
        fatalError("to be implemented")
    }
}

extension Sequence {
    @inlinable public func reduce2<Result>(_ initialResult: Result, _ nextPartialResult: (_ partialResult: Result, Element) throws -> Result) rethrows -> Result {
        fatalError("to be implemented")
    }
}

extension Collection {
    @inlinable public var isEmpty2: Bool {
        fatalError("to be implemented")
    }
}
