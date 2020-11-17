import React ,{ useState } from 'react'
import Test from '../testUseState'
import Swiper from '../swiper'
import MemoTest from '../useMemoTest'
import ExpansionList from '../ExpansionList'
import KuoZhanTest from '../Kuozhan'
import DialogModule from '../DialogMoudle'
import FetchAndFocus from '../FetchAndFocus'
import AntDTest from '../AntDTest'
import ContextTest from '../contextTest'
import ReducerTest from '../reducerTest'
import CanvasTest from '../Canvas'
import {TabsManager, Tabs, TabPanels, TabPanel, Button} from 'react-md'
import './styles.scss'

export default function Main (){
    const tabs = ["Tab 1", "Tab 2", "Tab 3","Tab 4","Tab 5","Tab 6","Tab 7","Tab 8","Tab 9","Tab 10","Tab 10"];
    const [visible, setVisible ] = useState(false);
    const [title, setTitle] = useState("module-title");
    const [content, setContent ] = useState("moudle-content");
    const [closeText,setCloseText] = useState('x')

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
                    <TabPanel className="tab">
                        <p className="title">Panel 11</p>
                        <CanvasTest/>
                    </TabPanel>
                    <TabPanel className="tab">
                        <p className="title">Panel 10</p>
                        <ReducerTest/>
                    </TabPanel>
                    <TabPanel className="tab">
                        <p className="title">Panel 9</p>
                        <ContextTest/>
                    </TabPanel>
                    <TabPanel className="tab">
                        <p className="title">Panel 8</p>
                        <AntDTest/>
                    </TabPanel>
                    <TabPanel>
                        <p className="title">Panel 7</p>
                        <FetchAndFocus  show={show}/>
                    </TabPanel>
                    <TabPanel>
                        <p className="title">Panel 6</p>
                        <p className="title">扩展运算符 —— “...”</p>
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
                        <p className="title">Panel 5</p>
                        <ExpansionList/>
                    </TabPanel>
                    <TabPanel>
                        <p className="title">Panel 4</p>
                        <MemoTest/>
                    </TabPanel>
                    <TabPanel>
                        <p className="title">Panel 3</p>
                        <Button onClick={showDialog}>
                            Show Dialog
                        </Button>
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
                        <p className="title">Panel 2</p>
                        <Swiper/>
                    </TabPanel>
                    <TabPanel>
                        <p className="title">Panel 1</p>
                        <Test className="test"/>
                    </TabPanel>
                    
                </TabPanels>
            </TabsManager>
        </div>
    )
}

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