export default{

    cpp: `#include <bits/stdc++.h>
    using namespace std;
    // Độ phức tạp thời gian: O(NlogN)
    // Độ phức tạp không gian: O(1)
    int kiem_so_lon_nhat_brute_force(vector<int> arr)
    {
        int n = arr.size();
        sort(arr.begin(), arr.end());
        return arr[n - 1];
    }
    // Độ phức tạp thời gian: O(N)
    // Độ phức tạp không gian: O(1)
    int kiem_so_lon_nhat_optimal(vector<int> arr)
    {
        int n = arr.size();
        int lon_nhat = arr[0];
        for (int i = 1; i < n; i++)
        {
            if (lon_nhat < arr[i])
            {
                lon_nhat = arr[i];
            }
        }
        return lon_nhat;
    }
    int main()
    {
        vector<int> arr{3, 4, 5, 2, 1, 9, 8};
        cout << kiem_so_lon_nhat_brute_force(arr) << endl;
        cout << kiem_so_lon_nhat_optimal(arr);
    }`,
    java: `import java.util.*;
    public class KiemSoLonNhat {
        public static void main(String[] args) {
            int[] arr = {3,4,5,2,1,9,8};
            System.err.println(kiemSoLonNhatOptimal(arr));
        }
        //Độ phức tạp thời gian: O(NlogN)
        //Độ phức tạp không gian: O(1)
        public static int kiemSoLonNhatBruteForce(int[] arr) {
            Arrays.sort(arr);
            int n = arr.length;
            return arr[n-1];
        }
        //Độ phức tạp thời gian: O(N)
        //Độ phức tạp không gian: O(1)
        public static int kiemSoLonNhatOptimal(int[] arr) {
            int n = arr.length;
            int lonNhat = arr[0];
            for(int i = 1; i < n; i++) {
                if(lonNhat < arr[i]) {
                    lonNhat = arr[i];
                }
            }
            return lonNhat;
        }
    }
    `}

