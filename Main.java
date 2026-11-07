// class Tile {
//     int x, y;
//     int color;

//     boolean spread;
//     Tile(int x, int y, int color){
//         this.x = x;
//         this.y = y; 
//         this.color = color;

//         spread = false;
//     }
//     void Display(){
//         fill(color);

//     }
// }


public class Main{
    public static void main(String[] args){
        int rows = 25;
        int columns = 25;
        
        int[][] matrix = new int[rows][columns];
        for(int i = 0; i < rows; i++){
            for(int j = 0; j<columns; j++){
                System.out.print(matrix[i][j]);
            }
            System.out.println();
        }
    }
}