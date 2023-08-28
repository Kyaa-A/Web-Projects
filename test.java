import java.util.Scanner;

public class test{
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);

        int age = scan.nextInt();

        System.out.println(age >= 18 ? "Adult": "Minor");

        // if(age >= 18){
        //     System.out.println("Adult");
        // }else{
        //     System.out.println("Minor");
        // }
    }
}