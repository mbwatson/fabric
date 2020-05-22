---
question: Is there a "control link" that experiment nodes can talk to each other for control purposes? It's like SSH, but from the script running on a node, instead of an experimenter's laptop.
---
Experiment slivers can (by default) be accessed via SSH over the public internet. FABRIC does not provide a FABRIC-defined “control channel” between slivers, but experimenters can use a sliver’s external-facing interfaces to implement a control channel over the public Internet.  Alternatively, experimenters can use a sliver’s internal-facing interfaces to implement a control channel over the experiment’s private dataplane.

2.The metrics collection system sounds very powerful. I’m wondering, what technologies has FABRIC evaluated for this? FABRIC’s experience here could be instructive for operators of other multi-tenant research infrastructures. Will the metrics framework have any provision so experiments can capture network and node telemetry data? 

The measurement system will collect a wide range of network, node, and other infrastructure telemetry data that will be available to experimenters. The FABRIC design is focused on specifying the functionality of the system components in an attempt to keep the design independent of the specific technologies used to implement FABRIC.
-