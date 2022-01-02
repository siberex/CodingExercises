// javac inc.java -d /tmp && java -cp /tmp inc

public class inc {
  public static void main(String[] args) {

    int i = 10;
    System.out.println( ++i & i-- );

    int inc1 = i + 1;
    System.out.println( inc1 & inc1-- );
  }
}