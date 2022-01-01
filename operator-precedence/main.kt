// kotlinc -nowarn main.kt -include-runtime -d /tmp/main.jar && java -jar /tmp/main.jar
fun main() {
    var year = 2021
    println(
        (++ year and year --) + (++ year xor year --)
    )
}