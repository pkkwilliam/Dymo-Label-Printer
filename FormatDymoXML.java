import java.util.Scanner;

/*
 * The puropuse of this program is to add '\' at the end 
 * of each sentences so it can compile.
 * variable value are in <String> tag
 */
public class FormatDymoXML {
	public static void main(String[]args){
		Scanner scan = new Scanner(System.in);
		String backSlash = "\\";
		while(scan.hasNext())
			System.out.println(scan.nextLine()+backSlash);
	}
}
