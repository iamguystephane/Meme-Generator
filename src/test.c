#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<time.h>

char *greetings(int hours){
    char *timeOfDay;
    timeOfDay = (char *)malloc(100*sizeof(char));
    
    if(hours >=4 && hours < 12){
        strcpy(timeOfDay, "morning");
    }
    else if(hours >=12 && hours < 16){
        strcpy(timeOfDay, "afternoon");
    }
    else if(hours >= 16 && hours < 20){
        strcpy(timeOfDay, "evening");
    }
    else{
        strcpy(timeOfDay, "night");
    }

    return timeOfDay;
}

int main(){
    time_t current_time = time(NULL);
    struct tm *local_time = localtime(&current_time);
    int hours = local_time->tm_hour;

    char *name;
    printf("Enter your name: ");
    name = (char *)malloc(100*sizeof(name));
    fgets(name,100,stdin);
    char *timeOfDay = greetings(hours);
    printf("Good %s %s", timeOfDay, name);

    free(name);
    free(timeOfDay);
    return 0;
}