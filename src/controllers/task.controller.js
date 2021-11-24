import Task from '../models/Task'

export const renderTask=async(req,res)=>{
 
 
    const tasks =await Task.find().lean()//tipicos
    //console.log(tasks)
    res.render("index",{tasks:tasks});
}

export const createTask=async(req,res)=>{
    
    try {
        const task =Task(req.body)
    
    await task.save()
    //console.log(taskSaved)
    //res.send("add task");
    res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

export const renderTaskEdit= async(req,res)=>{
    try {
        console.log(req.params.id)
    const task=await Task.findById(req.params.id).lean();
    res.render("edit",{task})
    } catch (error) {
        console.log(error.message)
        async(req,res)=>{
            const {id}=req.params;
            const task=await Task.findById(id);
            //console.log(task);
            task.done=!task.done;//anverso?
            await task.save()
            res.redirect('/')
        }    }
}

export const editTask= async(req,res)=>{
    // console.log(req.body)
    // console.log(req.params.id)
    const {id}=req.params;
    await Task.findByIdAndUpdate(id,req.body)
    //res.send("recived")
    res.redirect('/')
}

export const deleteTask=async (req,res)=>{
    const {id}=req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
}
export const taskToggleDone=async(req,res)=>{
    const {id}=req.params;
    const task=await Task.findById(id);
    //console.log(task);
    task.done=!task.done;//anverso?
    await task.save()
    res.redirect('/')
}