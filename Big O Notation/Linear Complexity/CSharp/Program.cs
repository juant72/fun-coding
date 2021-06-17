using System;

namespace LinearComplexity
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] inputs = new int[] { 2, 3, 4, 5, 6, 7 };
            display_all_cubes(inputs);
        }

        static void display_all_cubes(int[] items)
        {
            foreach (var item in items)
            {
                var result = Math.Pow(item, 3);
                Console.WriteLine(result);
            }
        }
    }
}
