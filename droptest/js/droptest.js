/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function shiftBox(boxId)
{
    var id = "#box"+boxId;
    $(id).toggleClass('big');
    $(id + " .input-container").toggleClass('visible');
}
