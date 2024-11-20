const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {

	let presum=[];

	for(let i=0;i<arr.length;i++)
		{
			if(i===0)
			{
				presum.push(arr[i]);
			}
			else
			{
				presum.push(presum[i-1]+arr[i]);
			}
		}

	let ansarr=[];
	let curarr=[];
	for(let i=arr.length-1;i>=0;)
		{
			let csum=0;
			let eindex=i;
			if(presum[i]<=n)
			{
				curarr=arr.slice(0,i+1);
				ansarr.push(curarr);
				break;
			}
			else
			{
				while(i>=0 && csum+arr[i]<=n && presum[i]>n)
					{
						csum+=arr[i];
						i--;
					}
				ansarr.push(arr.slice(i+1,eindex+1));
			}
		}

	ansarr.reverse();
	return ansarr;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
