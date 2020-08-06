import React ,{ useState } from 'react'
import Test from '../testUseState'
import Swiper from '../swiper'
import MemoTest from '../useMemoTest'
import ExpansionList from '../ExpansionList'
import KuoZhanTest from '../Kuozhan'
import DialogModule from '../DialogMoudle'
import OrderTest from '../FetchAndFocus'
import {TabsManager, Tabs, TabPanels, TabPanel, Button} from 'react-md'
import './styles.scss'

export default function Main (){
    const tabs = ["Tab 1", "Tab 2", "Tab 3","Tab 4","Tab 5","Tab 6","Tab 7","Tab 8"];
    const [visible, setVisible ] = useState(false);
    const [title, setTitle] = useState("module-title");
    const [content, setContent ] = useState("moudle-content");
    const [closeText,setCloseText] = useState('x')
    
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
        setCloseText("X")
        setVisible(true);
    }
    const testDialog = () => {
        setTitle("Test-Dialog");
        setContent(" ~.~ ")
        setCloseText("CLOSE")
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }
    const show = false
    
    return (
        <div className="mainBody">
            <TabsManager tabs={tabs} className="tabs">
                <Tabs/>
                <TabPanels>
                    <TabPanel>
                        <p >Panel 7</p>
                        <OrderTest  show={show}/>
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 6</p>
                        <p>扩展运算符 —— “...”</p>
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
                        <p>Panel 5</p>
                        <ExpansionList/>
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 4</p>
                        <MemoTest/>
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 3</p>
                        <Button onClick={showDialog} className="button">Show Dialog</Button>
                        <Button onClick={testDialog}>
                            test dialog
                        </Button>
                        <DialogModule
                            title={title}
                            content={content}
                            visible={visible}
                            closeText={closeText}
                            onClose={onClose}
                        />
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 2</p>
                        <Swiper/>
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 1</p>
                        <Test className="test"/>
                    </TabPanel>
                    
                </TabPanels>
            </TabsManager>
        </div>
    )
}