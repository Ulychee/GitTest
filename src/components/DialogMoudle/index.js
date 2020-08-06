import React from 'react'
import {Button, Dialog, DialogHeader, DialogTitle, DialogFooter} from 'react-md'

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
            <div>{content}</div>
            <DialogFooter>
                <Button onClick={onClose}>
                    {closeText}
                </Button>
            </DialogFooter>
        </Dialog>
    )
}