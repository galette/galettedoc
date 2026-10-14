.. _man_groups:

******
Groups
******

Groups gather members who share something: the board, a team, a section of your association, the people taking part in a project... A member can belong to as many groups as needed, and groups can be nested: a "Juniors" group can be placed under a "Football" group, for example.

Each group can also have **managers**. A manager is a member who looks after the members of the group; what a manager is allowed to do is decided by the association, see :ref:`group managers <pref_rights>`.

Groups are managed from **Management**, then **Groups**.

Groups list
===========

The list displays all groups, the subgroups being placed under their parent group.

.. image:: ../_styles/static/images/usermanual/groups_list.png
   :scale: 50%
   :align: center
   :alt: Groups list

* **New group** creates a group: type its name and click on **Create**,
* **All groups PDF** exports all groups and their members in a single PDF file,
* the icons of the **Actions** column export the group as PDF, edit it, or delete it.

To change the organisation of your groups, drag a group with the arrows icon and drop it under another one: it becomes its subgroup. Moving a group at the top of the list detaches it from its parent. Click on **Save** under the list to keep your changes.

Editing a group
===============

Click on the edit icon of a group to see and change it.

.. image:: ../_styles/static/images/usermanual/groups_edit.png
   :scale: 50%
   :align: center
   :alt: Editing a group

* **Information**: the name of the group, and its **Parent group** if it is a subgroup,
* **Members - Managers**: one line per person attached to the group, with two switches: **Member of group** and **Group manager**. A person can be both.

To change who belongs to the group:

* to add someone, search for them in **Add a member**, then click on **Add**: they are added as a member of the group; switch on **Group manager** to make them a manager too,
* to change the role of someone already listed, use the switches of their line,
* to remove someone from the group, click on the cross at the end of their line. Click on **Cancel** to keep them after all.

Changed lines are labelled (*added*, *changed*, *will be removed*), and a message reminds you that nothing is stored yet: click on **Save** to keep your changes.

Only administrators and staff members can change the members and managers from this page. Group managers see the list, but change the members of their groups from the member cards.

.. versionchanged:: 1.3.1
   Members and managers are listed in a single table, instead of being selected in a separate window. Groups of a member card work the same way.

Groups can also be changed from a member card: the **Groups** part of the member form lists the groups the member belongs to and the groups they manage, with the same switches. Pick a group in **Add to group** and click on **Add** to attach the member to another group.

.. image:: ../_styles/static/images/usermanual/member_groups.png
   :scale: 50%
   :align: center
   :alt: Groups of a member

Several members at once
=======================

To add several members to a group, or to remove them from it, in one go:

#. go to **Members**, then **List of members**, and select the members with the checkboxes,
#. choose **Mass change** in the actions displayed under the list,
#. in the **Groups:** part, pick a group in **Add to group** or in **Remove from group**,
#. check the summary, and confirm.

See :ref:`mass changes <mass_changes>` for the other information that can be changed this way.

Deleting a group
================

Click on the delete icon of the group, and confirm. A group that still has members or subgroups cannot be deleted as is: check **Cascade delete** in the confirmation window to delete the group along with its subgroups. Members are never deleted; they are only removed from the group.

Groups and searches
===================

The members list can be filtered on a group, and the :ref:`advanced search <advsearch>` can find members belonging to several groups at once.
