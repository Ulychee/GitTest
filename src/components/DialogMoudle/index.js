import React from 'react'
import {Button, Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter} from 'react-md'

export default ({title,content,visible,closeText,onClose}) => {
    
    return (
        <Dialog
            id="dialog"
            visible={visible}
            onRequestClose={onClose}
        >
            <DialogHeader>
                <DialogTitle className="dialogTitle">
                    {title}
                </DialogTitle>
            </DialogHeader>   
            <DialogContent>
                {content}
            </DialogContent>
            <DialogFooter>
                <Button onClick={onClose}>
                    {closeText}
                </Button>
            </DialogFooter>
        </Dialog>
    )
}