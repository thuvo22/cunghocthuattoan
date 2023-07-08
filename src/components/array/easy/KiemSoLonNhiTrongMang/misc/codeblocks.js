export default{

    cpp: `#include <bits/stdc++.h>
    using namespace std;
    // Độ phức tạp thời gian: O(NlogN + N)
    // Độ phức tạp không gian: O(1)
    int kiem_so_lon_nhi_brute_force(vector<int> arr)
    {
        int n = arr.size();
        if (n < 2)
        {
            return -1;
        }
        sort(arr.begin(), arr.end());
        int lon_nhat = arr[n - 1];
        for (int i = n - 2; i >= 0; i--)
        {
            if (lon_nhat != arr[i])
            {
                return arr[i];
            }
        }
        return arr[0];
    }
    // Độ phức tạp thời gian: O(N)
    // Độ phức tạp không gian: O(1)
    int kiem_so_lon_nhi_optimal(vector<int> arr)
    {
        int n = arr.size();
        int lon_nhat = arr[0];
        int lon_nhi = -1;
        for (int i = 1; i < n; i++)
        {
            if (lon_nhat < arr[i])
            {
                lon_nhi = lon_nhat;
                lon_nhat = arr[i];
            }
            else if (arr[i] > lon_nhi && arr[i] < lon_nhat)
            {
                lon_nhi = arr[i];
            }
        }
        return lon_nhi;
    }
    int main()
    {
        vector<int> arr{1, 5, 7, 3, 7, 4};
        cout << kiem_so_lon_nhi_brute_force(arr) << endl;
        cout << kiem_so_lon_nhi_optimal(arr);
    }`,
    java: `package array;

    import java.util.Arrays;
    
    public class KiemSoLonNhi {
        public static void main(String[] args) {
            int[] arr = { 1, 5, 7, 3, 7, 4 };
            System.err.println(kiemSoLonNhiBruteForce(arr));
            System.err.println(kiemSoLonNhiOptimal(arr));
        }
        //Độ phức tạp thời gian: O(NlogN + N)
        //Độ phức tạp không gian: O(1)
        public static int kiemSoLonNhiBruteForce(int[] arr) {
            int n = arr.length;
            Arrays.sort(arr);
            int lonNhat = arr[n-1];
            //nếu mảng chỉ có 0 hoặc 1 giá trị, trả lại -1 vì không có số lớn thứ hai
            if(n < 2) {
                return -1;
            }
            for(int i = n-2; i >= 0; i--) {
                if(lonNhat != arr[i]) {
                    return arr[i];
                }
            }
            // nếu tất cả thành phần trong mảng giống nhau
            return arr[0];
        }
        //Độ phức tạp thời gian: O(N)
        //Độ phức tạp không gian: O(1)
        public static int kiemSoLonNhiOptimal(int[] arr) {
            int n = arr.length;
            if(n < 2) {
                return -1;
            }
            int lonNhat = arr[0];	
            int lonNhi = -1;
            for(int i = 0; i < n; i++) {
                if(lonNhat < arr[i]) {
                    //thay lớn nhì bằng kết quả trước của lớn nhất  
                    lonNhi = lonNhat;
                    lonNhat = arr[i];
                }
                if(arr[i] > lonNhi && arr[i] < lonNhat) {
                    lonNhi = arr[i];
                }
            }
            return lonNhi;
        }
    }    
    `}

