import Foundation

public func describe( _ name: String = "no name", _ code: ()->()) {
    print("--- \(name) ---")
    code()
    print("\n")
}

public func it( _ name: String = "no name", _ code: ()->()) {
    print("\(name)")
    code()
    print("\n")
}

public func iExpectThat(_ result: Bool, _ info: String = "unnamed test") {
    if result {
        print("  • \(info): ✅")
    } else {
        print("  • \(info): ❌")
    }
}
