using System;

namespace QuadraticComplexity
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] inputs = new int[] { 2, 3, 4, 5, 6, 7 };
            display_quadratic_complexity(inputs);
        }

        static void display_quadratic_complexity(int[] items)
        {
            foreach (var item in items)
            {
                foreach (var item_internal in items)
                {
                    var result = item * item_internal;
                    Console.WriteLine(result);
                }
            }
        }

    }
}
