#!/bin/bash

RED='\033[0;31m' # red color
GREEN='\033[0;32m' # green color
NC='\033[0m' # no color

current_branch_name=$(git rev-parse --abbrev-ref HEAD) # get the current branch name
temp="temp-branch-name.txt" # temporary file to create to read a name of the current branch from it
types="test|fix|feature|refactor|update" # types which are used at the start of branch name
regex="^$types/[a-z]+(-[a-z]+)*" # a regex to check whether the branch name is like <type>/<subject>(-<subject> - optionally)

echo $current_branch_name > $temp # write the current branch name to file
found_pattern="$(egrep $regex $temp)" # find the pattern matching in the current branch name
rm $temp # remove that temporary file

if [ "$current_branch_name" = "$found_pattern" ] # check whether the branch name matches the pattern
then
    echo "------------"
    echo -e "Branch name check - ${GREEN}success${NC}"
    echo "------------"
else
    echo "------------"
    echo -e "Branch name check - ${RED}failure${NC}" # -e flag stands for allowing \ in the output
    echo "Branch name should follow this pattern: <type>/<subject>"
    echo "The <type> must be one of: $types"
    echo "The <subject> is a short description divided by '-'"
    echo "Try to use 'git branch -m <new_branch_name>' to rename the current branch"
    echo "------------"
    exit 1
fi

exit 0
