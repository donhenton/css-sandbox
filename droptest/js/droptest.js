/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function shiftBox(boxId)
{
    var id = "#box"+boxId;
    if ($(id+" input[type='checkbox']").length >0)
    {
        $(id).toggleClass('big');
    }
    
    
    
  //  $(id).toggleClass('big');
  //  $(id + " .input-container").toggleClass('visible');
}
