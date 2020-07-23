import React ,{ useState } from 'react'
import Test from '../testUseState'
import Swiper from '../swiper'
import MemoTest from '../useMemoTest'
import ExpansionList from '../ExpansionList'
import KuoZhanTest from '../Kuozhan'
import {TabsManager, Tabs, TabPanels, TabPanel, Button, Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter} from 'react-md'
import './styles.scss'

export default function Main (){
    const tabs = ["Tab 1", "Tab 2", "Tab 3","Tab 4","Tab 5","Tab 6"];
    const [visible, setVisible ] = useState(false);
    const [title, setTitle] = useState("Null-title");
    const [content, setContent ] = useState("Null-content");
    
    const list =[
        {
            value:"test1",
            id:'1'
        },
        {
            value:"test2",
            id:'2'
        },
        {
            value:"test3",
            id:'3'
        },
    ]

    const showDialog = () => {
        setTitle("Show-Dialog");
        setContent(" 0.0")
        setVisible(true);
    }
    const testDialog = () => {
        setTitle("Test-Dialog");
        setContent(" ~.~")
        setVisible(true)
    }
    
    return (
        <div className="mainBody">
            <TabsManager tabs={tabs} className="tabs">
                <Tabs/>
                <TabPanels>
                    <TabPanel>
                        <p style={{paddingTop:"10px",paddingLeft:"20px"}}>Panel 6</p>
                        <p style={{paddingTop:"10px",paddingLeft:"20px"}}>扩展运算符 —— “...”</p>
                        {list.map((value,key)=>{
                            return(
                                <KuoZhanTest
                                    title={"user title"}
                                    content="user content"
                                    {...value}
                                    key={key}
                                />
                            )
                        })}
                    </TabPanel>
                    <TabPanel>
                        <p style={{paddingTop:"10px",paddingLeft:"20px"}}>Panel 5</p>
                        <ExpansionList/>
                    </TabPanel>
                    <TabPanel>
                        <p style={{paddingTop:"10px",paddingLeft:"20px"}}>Panel 2</p>
                        <Swiper/>
                    </TabPanel>
                    <TabPanel>
                        <p style={{paddingTop:"10px",paddingLeft:"20px"}}>Panel 3</p>
                        <Button onClick={showDialog} className="button">Show Dialog</Button>
                        <Button onClick={testDialog}>
                            test dialog
                        </Button>
                        <Dialog
                            id="dialog"
                            visible={visible}
                            onRequestClose={()=>{setVisible(false)}}
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
                                <Button onClick={()=>{setVisible(false)}}>Close</Button>
                            </DialogFooter>
                        </Dialog>
                    </TabPanel>
                    <TabPanel>
                        <p style={{paddingTop:"10px",paddingLeft:"20px"}}>Panel 4</p>
                        <MemoTest/>
                    </TabPanel>
                    <TabPanel>
                    <p style={{paddingTop:"10px",paddingLeft:"20px"}}>Panel 1</p>
                        <Test className="test"/>
                    </TabPanel>
                </TabPanels>
            </TabsManager>
        </div>
    )
}