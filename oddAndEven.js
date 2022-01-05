const twoSum=(nums,target)=>{
    let obj={}

     for(const [key, value] of nums.entries()){
      if(obj[value]) return [obj[value], key]
        obj[target - value] = key
     }
}
