// kotlinc -nowarn main.kt -include-runtime -d /tmp/main.jar && java -jar /tmp/main.jar
// native-image -jar /tmp/main.jar /tmp/main

// xattr -rd com.apple.quarantine /usr/local/Caskroom/kotlin-native
// kotlinc-native -nowarn -opt main.kt -o /tmp/main && /tmp/main.kexe
fun main() {
    var year = 2021
    println(
        (++ year and year --) + (++ year xor year --)
    )
}