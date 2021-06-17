using System;

namespace ConstantComplexity
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] inputs = new int[] { 2, 3, 4, 5, 6, 7, 8 };

            display_first_cube(inputs);
        }
        static void display_first_cube(int[] items)
        {
            int results = (int)Math.Pow(items[0], 3);
            Console.WriteLine(results);
        }
    }
}
