import Popover from "./Popovers/popover";

document.addEventListener('DOMContentLoaded', () => {
    const popoverButton = document.querySelector('.click-popover');
    const popovers = new Popover();
    let popoverList = [];

    popoverButton.addEventListener('click', (event) => {
        event.preventDefault();
        const removePopoverlist = popoverList.filter(i => i.buttton == popoverButton);
        if (removePopoverlist.length == 0) {
            const popoverId = popovers.showPopover('Popover title', "And here's some amazing content. It's very engaging. Right?", popoverButton);
            popoverList.push({popoverId, buttton: popoverButton});
        }
        else {
            popovers.removePopover(removePopoverlist[0].popoverId);
            for (let i of popoverList) {
                if (i.popoverId == removePopoverlist[0].popoverId) {
                    popoverList.pop(i)
                }
            }
        }
    })
})