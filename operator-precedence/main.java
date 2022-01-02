// javac main.java -d /tmp && java -cp /tmp main

// https://twitter.com/siberex/status/1477564338135343108

public class main {
  public static void main(String[] args) {
    int year = 2021;
    System.out.println(
        (++ year & year --) + (++ year ^ year --)
    );
  }
}