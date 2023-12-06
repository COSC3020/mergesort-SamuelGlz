//This version is not iretative, work in progress

function mergesort(array, beginning = 0, end = array.length - 1) {
    
    if(!array.length > 0) {
        return array
    }

    if(beginning < end) {
        const mid = Math.floor((beginning + end) / 2)
        //console.log(beginning + " " + mid)
        //console.log(array[beginning] + " " + array[mid])
        
        mergesort(array, beginning, mid)        
        mergesort(array, mid + 1, end)
        merge(array, beginning, end, mid)
    }

    function merge(array, leftIndex, rightBound, middle)
    {
        //console.log("When merging we have " + leftIndex + ": " + array[leftIndex]+ " " + rightBound + ": " + array[rightBound]+ " " + middle + ": " + array[middle])
        let rightIndex = middle + 1;

        if (array[middle] <= array[rightIndex] ){
            return;
        }


        while (leftIndex <= middle && rightIndex <= rightBound)
        {
            if (array[leftIndex] <= array[rightIndex])
            {
                leftIndex++;
            }
            else
            {
                let temp = array[rightIndex];

                for( i = rightIndex; i != leftIndex; i--){
                    array[i] = array[i - 1]
                }

                array[leftIndex] = temp;
                //console.log("New array looks like: " +array)
                leftIndex++;
                rightIndex++;
                middle++;
                
            }
        }
        //console.log("Array looks like after merge: " + array)
    }
}
