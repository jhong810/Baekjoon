import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int x = scanner.nextInt();
        int result = 1;
        for(int i=0;i<x;i++){
            result = result * (i+1);
        }
        System.out.println(result);
    }
}