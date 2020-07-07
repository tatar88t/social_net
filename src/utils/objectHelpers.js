 export const updateObjArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
         if(user[objPropName] === itemId) {
             return{...user, ...newObjProps}
         }
         return user;
     })
 }