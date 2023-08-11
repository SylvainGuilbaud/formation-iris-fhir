/// Purge all resources from a FHIR repository based on its URL
Class FHIR.tasks.purge Extends %SYS.Task.Definition
{

Parameter NAMESPACE = "FHIRSERVER";

Parameter USERNAME = "_SYSTEM";

Parameter EMAILADDRESS = "<your email address>";

Parameter URL = "/fhir/r4";

Parameter TaskName = "Purge FHIR server ";

Property baseURL As %String [ InitialExpression = "/fhir/r4" ];

Method OnTask() As %Status
{
	return ##class(FHIR.utils).purge(..baseURL)
}

/// Schedule this task every day at 4am
/// NOT TO BE SET ON A PRODUCTION FHIR SERVER
ClassMethod ScheduleTask(name As %String = "") As %Status
{
	set sc = $$$OK
	Try {
        set:name="" name = ..#TaskName _ ..#URL
		set taskID = ##class(%SYS.Task).FindId(name)
		if taskID = "" {
			// Task is not present, need to create one
			set task = ##class(%SYS.Task).%New()
		} else {
			// Task has already been defined, save it with the current schedule
			set task = ##class(%SYS.Task).%OpenId(taskID,,.sc)
            do task.EmailOnCompletion.Clear()
            do task.EmailOnError.Clear()
		}
        set task.Name = name
		set task.NameSpace = ..#NAMESPACE
        set task.RunAsUser = ..#USERNAME
        #; do task.EmailOnCompletion.Insert(..#EMAILADDRESS)
        #; do task.EmailOnError.Insert(..#EMAILADDRESS)
        set task.TaskClass = "FHIR.tasks.purge"
        set task.Description = "Purge all resources from the FHIR server " _ ..#URL
        set task.Settings = $lb("serviceName","service "_task.TaskClass)
		set task.Type=2

        // Set schedule according to passed in parameters
        set task.TimePeriod = 0			
        set task.TimePeriodEvery = 1   	
        set task.TimePeriodDay = ""
        // launching task at 6am(=4am UTC)
        set task.DailyStartTime = 4*60*60

        // Build runs at most once every day
        set task.DailyFrequency = 0
        set task.DailyFrequencyTime = ""
        set task.DailyIncrement = ""
    
        set task.DailyEndTime = "" 
        
        // The task should be operational at the next available build time
        if task.DailyStartTime < $P($H,",",2) {
            set sc = task.StartDateSet(+$h + 1)
        } else {
            set sc = task.StartDateSet(+$h)
        }
        
		set sc = task.%Save()	
	}
	Catch ex {
		set sc = ex.AsStatus()
	}
	return sc
}

}
